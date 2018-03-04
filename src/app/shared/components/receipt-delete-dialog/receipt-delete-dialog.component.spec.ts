import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDeleteDialogComponent } from './receipt-delete-dialog.component';

describe('ReceiptDeleteDialogComponent', () => {
  let component: ReceiptDeleteDialogComponent;
  let fixture: ComponentFixture<ReceiptDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
