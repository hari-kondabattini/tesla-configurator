import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { teslaConfigStep3Guard } from './tesla-config-step3.guard';

describe('teslaConfigStep3Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => teslaConfigStep3Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
