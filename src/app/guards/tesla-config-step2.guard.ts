// import { CanActivateFn } from '@angular/router';
import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';

import { TeslaConfigService } from './../services/tesla-config.service';

export const teslaConfigStep2Guard: CanActivateFn = (route, state) => {
  // return true;
  // return false;
  
  // return TeslaConfigService.activateStep2;
  // return TeslaConfigService.getAactivateStep2();

  // constructor() { }

  // const teslaConfigService = inject(TeslaConfigService);
  // alert(inject(TeslaConfigService).activateStep2);
  // return inject(TeslaConfigService).activateStep2;



  // return inject(TeslaConfigService).getAactivateStep2();
  // return inject(TeslaConfigService).activateStep2; // not working as expected

  const teslaConfigService = inject(TeslaConfigService);
  // return teslaConfigService.activateStep2;

  // return teslaConfigService.getAactivateStep2();

  const router = inject(Router);
  if (teslaConfigService.getAactivateStep2()) return true;
  else return router.parseUrl('/');
};
