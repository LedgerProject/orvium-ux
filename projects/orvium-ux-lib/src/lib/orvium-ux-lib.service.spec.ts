import { TestBed } from '@angular/core/testing';

import { OrviumUxLibService } from './orvium-ux-lib.service';

describe('OrviumUxLibService', () => {
  let service: OrviumUxLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrviumUxLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
