import { TestBed } from '@angular/core/testing';

import { FromEventService } from './from-event.service';

describe('FromEventService', () => {
  let service: FromEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
