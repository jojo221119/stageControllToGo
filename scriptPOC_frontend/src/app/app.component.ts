import { Component, OnInit } from '@angular/core';

import { ScriptProviderService } from './script-provider.service';
import { Line } from './line';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [ScriptProviderService]
})
export class AppComponent implements OnInit{
  title = 'TheaterStück 1';
  script: Line[];

  constructor(private scriptProviderService:ScriptProviderService) {
  }

  ngOnInit():void {
    this.getScript();
  }

  getScript():void {
    this.script = this.scriptProviderService.getScript();
  }
}
