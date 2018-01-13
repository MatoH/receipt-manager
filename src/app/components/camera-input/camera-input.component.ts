import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

interface CameraControlButton {
  disabled: boolean;
}

@Component({
  selector: 'app-camera-input',
  templateUrl: './camera-input.component.html',
  styleUrls: ['./camera-input.component.css']
})

export class CameraInputComponent implements OnInit {
  @ViewChild('cameraStream', { read: ElementRef }) cameraStream: ElementRef;
  @ViewChild('snapshotCanvas', { read: ElementRef }) snapshotCanvas: ElementRef;
  // Control buttons used for camera stream
  controlButtons: {
    visible: boolean,
    remove: CameraControlButton,
    snapshot: CameraControlButton,
    download: CameraControlButton,
  };
  snapshot: {
    imagePlaceholder: {
      src: string,
      visible: boolean
    },
    downloadUrl: string,
  };
  constructor() { }

  ngOnInit() {
    this.controlButtons = {
      visible: false,
      remove: { disabled: true },
      snapshot: { disabled: false },
      download: { disabled: true },
    };
    this.snapshot = {
      imagePlaceholder: {
        src: '',
        visible: false
      },
      downloadUrl: ''
    };
    const constraints = { video: true };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        this.cameraStream.nativeElement.src = window.URL.createObjectURL(stream);

        // Play the video element to start the stream.
        // this.cameraStream.nativeElement.dispatchEvent(new Event('playVideo'));
        this.playVideo();

      }).catch((err) => {
        console.log(err);
        console.log('handling errors');
      });
  }

  playVideo() {
    this.cameraStream.nativeElement.play();

    this.cameraStream.nativeElement.classList.add('visible');
    this.controlButtons.visible = true;
  }
  takeSnapshot() {
    // Trick that involves a hidden canvas element.
   const context = this.snapshotCanvas.nativeElement.getContext('2d'),
      width = this.cameraStream.nativeElement.videoWidth,
      height = this.cameraStream.nativeElement.videoHeight;

    if (width && height) {
      // Setup a canvas with the same dimensions as the video.
      this.snapshotCanvas.nativeElement.width = width;
      this.snapshotCanvas.nativeElement.height = height;

      // Make a copy of the current frame in the video on the canvas.
      context.drawImage(this.cameraStream.nativeElement, 0, 0, width, height);

      // Turn the canvas image into a dataURL that can be used as a src for our photo.
      const snap = this.snapshotCanvas.nativeElement.toDataURL('image/png');

      // Show image.
      this.snapshot.imagePlaceholder.src = snap;
      this.snapshot.imagePlaceholder.visible = true;

      // Enable delete and save buttons
      this.controlButtons.remove.disabled = false;
      this.controlButtons.snapshot.disabled = true;
      this.controlButtons.download.disabled = false;

      // Set the href attribute of the download button to the snap url.
      this.snapshot.downloadUrl = snap;

      // Pause video playback of stream.
      this.cameraStream.nativeElement.pause();
    }
  }
  removeSnapshop() {
    this.snapshot.imagePlaceholder.src = '';
    this.snapshot.imagePlaceholder.visible = false;

    this.controlButtons.remove.disabled = true;
    this.controlButtons.snapshot.disabled = false;
    this.controlButtons.download.disabled = true;
    this.cameraStream.nativeElement.play();
  }
}
