import { TestBed } from '@angular/core/testing';

import { IsAdminUserGuard } from './is-admin-user-guard.service';

describe('IsAfdminUserGuard', () => {
  let guard: IsAdminUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdminUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
