import { TestBed } from '@angular/core/testing';

import { OrvSpinnerService } from './orv-spinner.service';

describe('SpinnerService', () => {
  let service: OrvSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrvSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
