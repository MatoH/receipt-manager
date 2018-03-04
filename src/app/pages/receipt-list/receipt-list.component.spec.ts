import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptListComponent } from './receipt-list.component';

describe('ReceiptManagerComponent', () => {
  let component: ReceiptListComponent;
  let fixture: ComponentFixture<ReceiptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
