import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { teslaConfigStep2Guard } from './tesla-config-step2.guard';

describe('teslaConfigStep2Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => teslaConfigStep2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
