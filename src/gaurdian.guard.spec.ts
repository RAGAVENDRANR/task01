import { TestBed } from '@angular/core/testing';

import { GaurdianGuard } from './gaurdian.guard';

describe('GaurdianGuard', () => {
  let guard: GaurdianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GaurdianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
