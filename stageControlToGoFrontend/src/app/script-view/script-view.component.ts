import { Component, OnInit } from '@angular/core';
import { ScriptProviderService } from '../script-provider.service';
import { Script } from '../script';
import { Element } from '../element';

@Component({
  selector: 'app-script-view',
  templateUrl: './script-view.component.html',
  styleUrls: ['./script-view.component.css'],
  providers: [ScriptProviderService]
})
export class ScriptViewComponent implements OnInit {

  script:Element[] = null;

  constructor(private scriptProviderService:ScriptProviderService) {}

  ngOnInit() {
    this.scriptProviderService.getScript().then((response) =>{

      console.log(response);
      console.log(response.Document[0]);
      
      this.script = response.Document;

      console.log(this.script);
    });        
  }

}
