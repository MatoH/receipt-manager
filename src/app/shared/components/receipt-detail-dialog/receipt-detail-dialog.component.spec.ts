import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDetailDialogComponent } from './receipt-detail-dialog.component';

describe('ReceiptDetailDialogComponent', () => {
  let component: ReceiptDetailDialogComponent;
  let fixture: ComponentFixture<ReceiptDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
