import { TestBed } from '@angular/core/testing';

import { AuthRoleGuardService } from './auth-role-guard.service';

describe('AuthRoleGuardService', () => {
  let service: AuthRoleGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRoleGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
