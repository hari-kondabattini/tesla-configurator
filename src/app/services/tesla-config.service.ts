// import { Injectable } from '@angular/core';
import {Injectable, inject} from '@angular/core';

import {HttpClient} from '@angular/common/http';


import { CarModelOptions, CarModelConfigOptions, CarModelConfigs } from './../models/tesla-config.model';

@Injectable({
  providedIn: 'root'
})
export class TeslaConfigService {
  // carModel: string | null = 'X';
  // carColor: string | null = 'blue';
  
  carModel: string | null = null;
  carModelDescription: string | null = null;
  carColor: string | null = null;
  carColorDescription: string | null = null;
  carColorPrice: number = 0;
  carConfigId: number | null = null;
  selectedConfig!: CarModelConfigs;
  carConfigIncludeTow: boolean = false;
  carConfigIncludeYoke: boolean = false;

  activateStep2 = false;
  activateStep3 = false;

  // alert(this.carModel && this.carColor)
  // activateStep2 = this.carModel && this.carColor;
  // activateStep3 = false;

  private http = inject(HttpClient);

  // constructor(private httpClient: HttpClient) { }
  constructor() {
    // this.activateStep2 = this.carModel && this.carColor;
    this.activateStep2 = (this.carModel && this.carColor) ? true: false;
  }

  getAactivateStep2() {
    // return this.activateStep2;

    // return this.carModel && this.carColor;
    return (this.carModel && this.carColor) ? true: false;
  }

  getAactivateStep3() {
    // return this.activateStep3;
    return (this.carModel && this.carColor && this.carConfigId) ? true: false;
  }
  
  getTeslaModels() {
    // return this.httpClient.get<any[]>('/models');
    // return this.http.get<any[]>('/models');

    return this.http.get<CarModelOptions[]>('/models');
  }
  
  getTeslaModelConfig(carModel: string | null) {
    return this.http.get<CarModelConfigOptions>('/options/' + carModel);
  }
}
