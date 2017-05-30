import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UpdateStateService } from '../../services/updateStateService/updateState.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'updateState',
  templateUrl: 'updateState.component.html',
  providers: [UpdateStateService, EditPlayService]
})

export class UpdateStateComponent implements OnInit  {
  stateName: string;
  playName: string;
  brightness: number;
  isDimmer: boolean;
  isByte: boolean;
  value: number;

  constructor(private updateStateService: UpdateStateService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.brightness = 50;
    this.isDimmer = false;
    this.isByte = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.stateName = params['state'];
    })
    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        this.checkIfStateExists();
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  checkIfStateExists() {
    this.updateStateService.checkIfExists(this.playName, this.stateName).subscribe(
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

  updateDimmerObject(brightness: number, type: string) {
    if(brightness !== null) {
      this.brightness = brightness;
    }

    let state = {Name: this.stateName, Brightness: this.brightness, Type: type};
    this.updateState(state);

  }

  updateByteObject(value: number, type: string) {
    let val = +value;

    if((val >= 0) && (val <= 255)) {
      let state = {Name: this.stateName, Value: val, Type: type};
      this.updateState(state);
    } else {
      alert('Die Eingabefelder sind inkorrekt. Der Wert muss mindestens 0 und darf höchstens 255 sein');
    }
  }

  updateState(state: Object) {
    this.updateStateService.updateState(state, this.playName).subscribe(
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
