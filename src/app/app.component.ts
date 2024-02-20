import {Component, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';

import { Router, RouterModule } from "@angular/router";
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TeslaConfigService } from './services/tesla-config.service';

// import {provideHttpClient} from '@angular/common/http';

// import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [AsyncPipe, JsonPipe, RouterModule, FormsModule],
  imports: [AsyncPipe, JsonPipe, RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // name = 'Angular';

  constructor(public teslaConfigService: TeslaConfigService) {
    
  }

  ngOnInit(): void {
    console.log(this.teslaConfigService.carModel + ' ---> ' + this.teslaConfigService.carColor );

    // let models = this.teslaConfigService.getTeslaModels().subscribe( (res) => {
    //   console.log(" *** models ");
    //   console.log(res);
    // }, 
    // (err) => {
    //   console.log(" *** err ");
    //   console.log(err);
    // });
  }
}
