import { TestBed } from '@angular/core/testing';

import { AuthenticationUserGuard } from './authentication-user.guard';

describe('AuthenticationUserGuard', () => {
  let guard: AuthenticationUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
