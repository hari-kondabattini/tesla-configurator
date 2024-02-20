import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';

import { TeslaConfigService } from './../services/tesla-config.service';

export const teslaConfigStep3Guard: CanActivateFn = (route, state) => {
  // return true;
  // return inject(TeslaConfigService).activateStep3;

  
  const teslaConfigService = inject(TeslaConfigService);
  const router = inject(Router);
  if (teslaConfigService.getAactivateStep3()) return true;
  else return router.parseUrl('/');
};
