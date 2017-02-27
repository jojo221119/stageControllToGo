import { Component, OnInit } from '@angular/core';
import { ScriptProviderService, MOCKSCRIPT } from '../script-provider.service';

@Component({
  selector: 'app-script-view',
  templateUrl: './script-view.component.html',
  styleUrls: ['./script-view.component.css'],
  providers: [ScriptProviderService]
})
export class ScriptViewComponent implements OnInit {

  script = MOCKSCRIPT;

  constructor(private scriptProviderService:ScriptProviderService) {}

  ngOnInit() {
  }

}
