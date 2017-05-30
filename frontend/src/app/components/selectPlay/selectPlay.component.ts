import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SelectPlayService } from '../../services/selectPlayService/selectPlay.service';

@Component({
  moduleId: module.id,
  selector: 'selectPlay',
  templateUrl: 'selectPlay.component.html',
  providers: [SelectPlayService]
})

export class SelectPlayComponent implements OnInit  {
  plays: Array<any>;
  jsonInput: Object;

  constructor(private selectPlayService: SelectPlayService, private router: Router) {
    this.plays = [];
  }

  ngOnInit() {
    this.selectPlayService.getPlays().subscribe(
      plays => {
        this.plays = plays;
      },
      error => {
        alert(error._body);
      })
  }

  sendJSON(input: Object) {
    this.selectPlayService.sendJSON(input).subscribe(
      data => {
        window.location.reload();
      },
      error => {
        alert(error._body);
      }
    )
  }
}
