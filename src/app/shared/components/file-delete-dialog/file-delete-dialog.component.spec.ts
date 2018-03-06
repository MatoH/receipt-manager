import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDeleteDialogComponent } from './file-delete-dialog.component';

describe('FileDeleteDialogComponent', () => {
  let component: FileDeleteDialogComponent;
  let fixture: ComponentFixture<FileDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
