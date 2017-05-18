import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";


import { Script } from '../../classes/script';
import { Element } from '../../classes/element';
import { SettingsService } from '../../services/settings.service';
import { ScriptProviderService } from '../../services/script-provider.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-script-view',
  templateUrl: './script-view.component.html',
  styleUrls: ['./script-view.component.css'],
  providers: [ScriptProviderService, SettingsService]
})
export class ScriptViewComponent implements OnInit {
  private scriptName: String;
  script:Element[] = null;

  constructor(
    private scriptProviderService:ScriptProviderService,
    private route: ActivatedRoute,
    private settingsService:SettingsService) {}

  ngOnInit() {

  this.route.params
    .switchMap((params: Params) => {
      this.scriptName = params['scriptName'];
      return this.scriptProviderService.getScript(this.scriptName)})
    .subscribe(response => this.script = response.Document);

  }

  activateSetting(event, sceneName:String) {
    event.target.className += " visited";
    this.settingsService.activateSetting(this.scriptName, sceneName).subscribe(res => res, err => console.log(<any>err));
  }

}
