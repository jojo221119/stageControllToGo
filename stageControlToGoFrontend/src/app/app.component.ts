import { Component } from '@angular/core';

import { ScriptProviderService, MOCKSCRIPT } from './script-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [ScriptProviderService]
})
export class AppComponent {
  title = 'Studienarbeit Mock';
  script = MOCKSCRIPT;

  constructor(private scriptProviderService:ScriptProviderService) {

  }
}
