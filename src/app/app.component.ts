import {Component, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';

import { Router, RouterModule } from "@angular/router";
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TeslaConfigService } from './services/tesla-config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // name = 'Angular';

  constructor(private teslaConfigService: TeslaConfigService) {
    
  }

  ngOnInit(): void {
    console.log(this.teslaConfigService.carModel + ' ---> ' + this.teslaConfigService.carColor );
  }
}
