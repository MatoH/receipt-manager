import { TestBed, inject } from '@angular/core/testing';

import { ReceiptStorageService } from './receipt-storage.service';

describe('ReceiptStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceiptStorageService]
    });
  });

  it('should be created', inject([ReceiptStorageService], (service: ReceiptStorageService) => {
    expect(service).toBeTruthy();
  }));
});
