import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeslaConfigService {
  carModel = 'Model 3';
  carColor = 'Blue';

  constructor() { }
}
