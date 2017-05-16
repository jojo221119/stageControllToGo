import { Component, OnInit, Input } from '@angular/core';
import { ScriptProviderService } from '../script-provider.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  providers: [ScriptProviderService]
})
export class SideMenuComponent implements OnInit {

  constructor(private scriptService:ScriptProviderService) { }

  @Input() scriptName:String;

  pages:number[];

  ngOnInit() {
    this.scriptService.getPages(this.scriptName)
      .then(response => this.pages = response)
      .catch(function(error){alert("Cannot retrieve pagenumbers")});
  }

}
