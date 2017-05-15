import { Component, OnInit } from '@angular/core';
import { ScriptProviderService } from '../script-provider.service';
import { Script } from '../script';
import { Element } from '../element';
import { ActivatedRoute, Params } from "@angular/router";
import { SettingsService } from '../settings.service';

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

  constructor(private scriptProviderService:ScriptProviderService,
  private route: ActivatedRoute,
  private settingsService:SettingsService) {}

  ngOnInit() {

  this.route.params
    .switchMap((params: Params) => {
      this.scriptName = params['scriptName'];
      return this.scriptProviderService.getScript(this.scriptName)})
    .subscribe(response => this.script = response.Document);

  }

  activateSetting(sceneName:String) {
    this.settingsService.activateSetting(this.scriptName, sceneName).subscribe(res => res, err => console.log(<any>err));
  }

}
