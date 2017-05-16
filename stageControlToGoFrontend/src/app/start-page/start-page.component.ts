import { Component, OnInit } from '@angular/core';
import { ScriptProviderService } from '../script-provider.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  providers: [ScriptProviderService]
})
export class StartPageComponent implements OnInit {

  texts:String[] = null;

  constructor(private scriptProviderService:ScriptProviderService) { }

  ngOnInit() {
    this.scriptProviderService.getScripts().then((response) =>{
      this.texts = response;
    })
  }

}
