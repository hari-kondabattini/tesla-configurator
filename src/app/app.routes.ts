import { Routes } from '@angular/router';

import { TeslaConfigStep1Component } from './components/tesla-config-step-1/tesla-config-step-1.component';
import { TeslaConfigStep2Component } from './components/tesla-config-step-2/tesla-config-step-2.component';
import { TeslaConfigStep3Component } from './components/tesla-config-step-3/tesla-config-step-3.component'

import { teslaConfigStep2Guard } from './guards/tesla-config-step2.guard';
import { teslaConfigStep3Guard } from './guards/tesla-config-step3.guard';

export const routes: Routes = [
    {
        path: 'step1',
        component: TeslaConfigStep1Component
    },
    {
        path: 'step2',
        component: TeslaConfigStep2Component,
        canActivate: [teslaConfigStep2Guard]
    },
    {
        path: 'step3',
        component: TeslaConfigStep3Component,
        canActivate: [teslaConfigStep3Guard]
    },
    {
        path: '',
        redirectTo: 'step1',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'step1'
    }
];
