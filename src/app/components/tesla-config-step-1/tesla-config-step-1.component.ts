import { Component, OnInit } from '@angular/core';

import { TeslaConfigService } from './../../services/tesla-config.service';
import { CarModelOptions, CarModelColor } from './../../models/tesla-config.model';

// import { FormsModule } from "@angular/forms";
// import { CommonModule } from '@angular/common';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tesla-config-step-1',
  standalone: true,
  // imports: [FormsModule, CommonModule],
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tesla-config-step-1.component.html',
  styleUrl: './tesla-config-step-1.component.scss'
})
export class TeslaConfigStep1Component implements OnInit {

  // carModel: string | null = null;
  // carColor: string | null = null;

  carModel = new FormControl('');
  carColor = new FormControl('');

  // this.modelCode = new FormControl<string | null>(null, { validators: Validators.required });
  
  models: CarModelOptions[] = [];
  colors: CarModelColor[] = [];

  constructor(public teslaConfigService: TeslaConfigService) {

  }

  ngOnInit(): void {
    console.log("+ + + carModel: "+ this.carModel);
    console.log("+ + + carColor: "+ this.carColor);

    console.log(this.teslaConfigService.carModel + ' ---> ' + this.teslaConfigService.carColor );

    console.log(" * + * + * ");

    let models = this.teslaConfigService.getTeslaModels().subscribe( (res) => {
      console.log(" *** models ");
      console.log(res);

      this.models = res;

      
      // // const selectedModelCode = this.configurationFormManager.modelCodeControlValue;
      // const foundModel = this.models.find(model => model.code === this.carModel);

      // this.colors = foundModel ? foundModel.colors : [];

      
      const foundModel = this.models.find(model => model.code === this.carModel.value);

      this.colors = foundModel ? foundModel.colors : [];


      // update with preserved value
      if (this.teslaConfigService.carModel) {
        this.carModel.setValue(this.teslaConfigService.carModel);
      }
    }, 
    (err) => {
      console.log(" *** err ");
      console.log(err);
    });


    /* value change */

    this.carModel.valueChanges.subscribe((carModel) => {

      // const foundModel = this.models.find(model => console.log("+ + + model : ", model));
      // const foundModel2 = this.models.find(model => console.log("+ + + model.code : ", model.code));
      console.log("+ + + carModel: ", carModel);
      const foundModel = this.models.find(model => model.code === carModel);
      this.colors = foundModel ? foundModel.colors : [];

      
      this.teslaConfigService.carModel = carModel;
      this.teslaConfigService.carModelDescription = foundModel ? foundModel.description : '';

      
      // update with preserved value
      if (this.teslaConfigService.carColor) {
        this.carColor.setValue(this.teslaConfigService.carColor);
      }
    });

    
    this.carColor.valueChanges.subscribe((carColor) => {
      console.log("+ + + carModel value: ", this.carModel.value);
      console.log("+ + + carColor: ", carColor);
      
      console.log("+ + + carModel value: "+ this.carModel.value);
      console.log("+ + + carColor: "+ carColor);

      
      this.teslaConfigService.carColor = carColor;

      const foundColor = this.colors.find(color => color.code === carColor);
      this.teslaConfigService.carColorDescription = foundColor ? foundColor.description : '';
      this.teslaConfigService.carColorPrice = foundColor ? foundColor.price : 0;
    });
  }
}
