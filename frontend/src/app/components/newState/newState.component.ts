import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewStateService } from '../../services/newStateService/newState.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'newState',
  templateUrl: 'newState.component.html',
  providers: [NewStateService, EditPlayService]
})

export class NewStateComponent implements OnInit  {
  name: string;
  brightness: number;
  playName: string;
  isDimmer: boolean;
  isByte: boolean;
  value: number;

  constructor(private newStateService: NewStateService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.brightness = 50;
    this.isDimmer = false;
    this.isByte = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
    })
    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  onChange(t) {
    if(t == 'DimmerState') {
      this.isDimmer = true;
      this.isByte = false;
    } else if (t == 'ByteState') {
      this.isByte = true;
      this.isDimmer = false;
    } else {
      this.isByte = false;
      this.isDimmer = false;
    }
  }

  createDimmerObject(name: string, brightness: number, type: string) {
    if(brightness !== null) {
      this.brightness = brightness;
    }
    if(name != null) {
      let state = {Name: name, Brightness: this.brightness, Type: type};
      this.createState(state);
    } else {
      alert ('Bitte geben Sie einen Namen für den Status ein');
    }
  }

  createByteObject(name: string, value: number, type: string) {
    let val = +value;

    if((name != null) && (val >= 0) && (val <= 255)) {
      let state = {Name: name, Value: val, Type: type};
      this.createState(state);
    } else {
      alert('Die Eingabefelder sind inkorrekt. Bitte geben Sie einen Namen ein. Der Wert muss mindestens 0 und darf höchstens 255 sein');
    }
  }

  createState(object: Object) {
    this.newStateService.createState(object, this.playName).subscribe(
      data => {
        let url = '/play/edit/' + this.playName;
        this.router.navigate([url]);
        return true;
      },
      error => {
        alert(error._body);
      }
    )
  }
}
