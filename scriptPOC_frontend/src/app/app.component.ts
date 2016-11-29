import { Component } from '@angular/core';

import { ScriptProviderService, MOCKSCRIPT } from './script-provider.service';
import { Line } from './line';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],

  providers: [ScriptProviderService]
})
export class AppComponent {
  title = 'app works!';
  script = MOCKSCRIPT;

  constructor(private scriptProviderService:ScriptProviderService) {

  }
}
