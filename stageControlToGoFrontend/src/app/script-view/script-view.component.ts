import { Component, OnInit } from '@angular/core';
import { ScriptProviderService } from '../script-provider.service';
import { Script } from '../script';
import { Element } from '../element';
import { ActivatedRoute, Params } from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-script-view',
  templateUrl: './script-view.component.html',
  styleUrls: ['./script-view.component.css'],
  providers: [ScriptProviderService]
})
export class ScriptViewComponent implements OnInit {

  script:Element[] = null;

  constructor(private scriptProviderService:ScriptProviderService,
  private route: ActivatedRoute) {}

  ngOnInit() {

  this.route.params
    .switchMap((params: Params) => this.scriptProviderService.getScript(params['scriptName']))
    .subscribe(response => this.script = response.Document);

  }

  activateSetting(sceneName:String) {
    alert("TEst");
  }

}
