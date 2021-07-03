import { TestBed } from '@angular/core/testing';

import { SupGuard } from './sup.guard';

describe('SupGuard', () => {
  let guard: SupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
