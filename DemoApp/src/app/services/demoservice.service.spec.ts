import { TestBed } from '@angular/core/testing';

import { DemoserviceService } from './demoservice.service';

describe('DemoserviceService', () => {
  let service: DemoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
