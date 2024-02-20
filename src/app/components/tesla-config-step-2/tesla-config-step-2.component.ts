import { Component, OnInit } from '@angular/core';

import { TeslaConfigService } from './../../services/tesla-config.service';
import { CarModelConfigOptions, CarModelConfigs } from './../../models/tesla-config.model';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tesla-config-step-2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tesla-config-step-2.component.html',
  styleUrl: './tesla-config-step-2.component.scss'
})
export class TeslaConfigStep2Component implements OnInit {

  // carModelConfigOptions: CarModelConfigOptions = [];
  carModelConfigOptions!: CarModelConfigOptions;
  configOptions : CarModelConfigs[] = [];

  selectedConfig! : CarModelConfigs;
  
  carConfig = new FormControl();
  includeTow = new FormControl(false);
  includeYoke = new FormControl(false);

  constructor(public teslaConfigService: TeslaConfigService) {

  }

  ngOnInit(): void {

    console.log(this.teslaConfigService.carModel + ' ---> ' + this.teslaConfigService.carColor );

    console.log(" * + * + * ");

    let configs = this.teslaConfigService.getTeslaModelConfig(this.teslaConfigService.carModel).subscribe( (res) => {
      console.log(" *** config options ");
      console.log(res);
      this.carModelConfigOptions = res;
      this.configOptions = res.configs;

      // update with preserved value
      if (this.teslaConfigService.carConfigId) {
        this.carConfig.setValue(this.teslaConfigService.carConfigId);
      }
      
      if (this.teslaConfigService.carConfigIncludeTow) {
        this.includeTow.setValue(this.teslaConfigService.carConfigIncludeTow);
      }
      
      if (this.teslaConfigService.carConfigIncludeYoke) {
        this.includeYoke.setValue(this.teslaConfigService.carConfigIncludeYoke);
      }
    }, 
    (err) => {
      console.log(" *** err ");
      console.log(err);
    });
    

    
    this.carConfig.valueChanges.subscribe((carConfigID) => {
      const foundConfig = this.configOptions.find(config => config.id === carConfigID);
      // this.selectedConfig = foundConfig ? foundConfig : null;
      if (foundConfig) this.selectedConfig = foundConfig;
      
      this.teslaConfigService.carConfigId = carConfigID;
      this.teslaConfigService.selectedConfig = this.selectedConfig;
    });

    
    this.includeTow.valueChanges.subscribe((includeTow) => {
      this.teslaConfigService.carConfigIncludeTow = (includeTow) ? true : false;
    });
    
    this.includeYoke.valueChanges.subscribe((includeYoke) => {
      this.teslaConfigService.carConfigIncludeYoke = (includeYoke) ? true : false;
    });
  }

}
