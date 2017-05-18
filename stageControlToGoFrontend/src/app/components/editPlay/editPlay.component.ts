import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { EditPlayService } from '../../services/editPlayService/editPlay.service';


@Component({
  moduleId: module.id,
  selector: 'editPlay',
  templateUrl: 'editPlay.component.html',
  providers: [EditPlayService]
})

export class EditPlayComponent implements OnInit  {
  playName: string;
  transmissions: Array<any>;
  isTransmission: boolean;
  transmissionsFromService: Array<any>;
  states: Array<any>;
  isState: boolean;
  statesFromService: Array<any>;
  byteStates: Array<any>;
  dimmerStates: Array<any>;

  scenesFromService: Array<any>;
  scenes: Array<any>;
  isScene: boolean;

  constructor(private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.isTransmission = false;
    this.transmissions = [];
    this.transmissionsFromService = [];

    this.isState = false;
    this.states = [];
    this.statesFromService = [];
    this.byteStates = [];
    this.dimmerStates = [];

    this.scenesFromService = [];
    this.scenes = [];
    this.isScene = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
    })
    //check if play exists
    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        this.getPlayInformation();
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  getPlayInformation() {
    this.editPlayService.getPlayInformation(this.playName).subscribe(
      data => {
        if(Object.keys(data.Transmissions).length !== 0) {
          this.transmissionsFromService.push(data.Transmissions);
          this.isTransmission = true;
          this.solveArray(this.transmissionsFromService, this.transmissions);
        }

        if(Object.keys(data.Scenes).length !== 0) {
          this.scenesFromService.push(data.Scenes);
          this.isScene = true;
          this.solveArray(this.scenesFromService, this.scenes);
        }

        if(Object.keys(data.States).length !== 0) {
          this.statesFromService.push(data.States);
          this.isState = true;
          this.solveArray(this.statesFromService, this.states);
          this.sortStates();
        }
      },
      error => {
        console.log('Error loading information for play: ' + error);
      }
    )
  }
  
  sortStates() {
    for(let i = 0; i < this.states.length; i++) {
      if(this.states[i].Type == 'DimmerState') {
        this.dimmerStates.push(this.states[i]);
      } else if(this.states[i].Type == 'ByteState') {
        this.byteStates.push(this.states[i]);
      }
    }
  }

  solveArray(input: Array<any>, output: Array<any>) {
    for (let key in input) {
      if(!input.hasOwnProperty(key)) {
        continue;
      }

      let obj = input[key];
      for(let prop in obj) {
        if(!obj.hasOwnProperty(prop)) {
          continue;
        }
        output.push(obj[prop]);
      }
    }
  }

  deleteTransmission(name: string) {
    this.editPlayService.deleteTransmission(this.playName, name).subscribe(
      data => {
        this.deleteFromArray(name, this.transmissions, this.isTransmission);
      },
      error => {
        console.log('Error deleting transmission: ' + error);
      }
    )
  }

  deleteState(name: string) {
    this.editPlayService.deleteState(this.playName, name).subscribe(
      data => {
        this.deleteFromArray(name, this.states, this.isState);
        if(this.isState) {
          this.sortStates();
        }
      },
      error => {
        console.log('Error deleting state: ' + error);
      }
    )
  }

  deleteScene(name: string) {
    this.editPlayService.deleteScene(this.playName, name).subscribe(
      data => {
        this.deleteFromArray(name, this.scenes, this.isScene);
      },
      error => {
        console.log('Error deleting scene: ' + error);
      }
    )
  }

  deleteFromArray(name: string, array: Array<any>, bool: boolean) {
    let isDeleted = false;
    let i = 0;

    while(!isDeleted) {
      if(array[i].Name == name) {
        array.splice(i, 1);
        isDeleted = true;
        if(array.length == 0) {
          bool = false;
        }
      }
      i++;
    }
  }

  playScene(name: string) {
    this.editPlayService.playScene(name, this.playName).subscribe(
      data => {
        return true;
      },
      error => {
        console.log('Error playing scene: ' + error);
      }
    )
  }
}
