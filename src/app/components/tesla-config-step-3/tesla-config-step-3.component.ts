import { Component, OnInit } from '@angular/core';

import { TeslaConfigService } from './../../services/tesla-config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tesla-config-step-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tesla-config-step-3.component.html',
  styleUrl: './tesla-config-step-3.component.scss'
})
export class TeslaConfigStep3Component implements OnInit {

  totalCost: number = 0;

  constructor(public teslaConfigService: TeslaConfigService) {}

  ngOnInit(): void {
    // this.totalCost =+ this.teslaConfigService.carColorPrice;
    // this.totalCost =+ this.teslaConfigService.selectedConfig.price;
    // if(this.teslaConfigService.carConfigIncludeTow)
    //   this.totalCost =+ 1000;
    // if(this.teslaConfigService.carConfigIncludeYoke)
    //   this.totalCost =+ 1000;

    this.totalCost += this.teslaConfigService.carColorPrice;
    this.totalCost += this.teslaConfigService.selectedConfig.price;
    if(this.teslaConfigService.carConfigIncludeTow)
      this.totalCost += 1000;
    if(this.teslaConfigService.carConfigIncludeYoke)
      this.totalCost += 1000;
  }

}
