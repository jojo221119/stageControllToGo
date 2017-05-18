import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewEffectService } from '../../services/newEffectService/newEffect.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'newEffect',
  templateUrl: 'newEffect.component.html',
  providers: [NewEffectService, EditPlayService]
})

export class NewEffectComponent implements OnInit  {
  playName: string;
  scene: string;
  deviceChannelsFromService: Array<any>;
  deviceChannels: Array<any>;
  statesFromService: Array<any>;
  states: Array<any>;
  sceneExists: boolean;
  scenesFromService: Array<any>;
  scenes: Array<any>;

  constructor(private newEffectService: NewEffectService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.deviceChannels = [];
    this.deviceChannelsFromService = [];
    this.states = [];
    this.statesFromService = [];
    this.sceneExists = false;
    this.scenes = [];
    this.scenesFromService = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.scene = params['scene'];
    })
    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        this.scenesFromService.push(data.Scenes);

        if(this.scenesFromService.length !== 0) {
          this.checkIfSceneExists();
        } else {
          this.router.navigate(['/404']);
        }

        if(this.sceneExists) {
          this.deviceChannelsFromService.push(data.DeviceChannels);
          this.getDeviceChannels();
          this.statesFromService.push(data.States);
          this.getStates();
        } else {
          this.router.navigate(['/404']);
        }
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
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

  getDeviceChannels() {
    this.solveArray(this.deviceChannelsFromService, this.deviceChannels);
  }

  getStates() {
    this.solveArray(this.statesFromService, this.states);
  }

  checkIfSceneExists() {
    this.solveArray(this.scenesFromService, this.scenes);

    let i = 0;
    while((i < this.scenes.length) && !this.sceneExists) {
      if(this.scenes[i].Name == this.scene) {
        this.sceneExists = true;
      }
      i++;
    }
  }

  createEffect(name: string, state: string, devChannel: string) {
    if((name != null) && (state != null) && (devChannel != null)) {
      let effect = {Name: name, State: state, DeviceChannel: devChannel};

      this.newEffectService.createEffect(effect, this.playName, this.scene).subscribe(
        data => {
          let url = '/play/edit/' + this.playName + '/scenes/' + this.scene + '/effects';
          this.router.navigate([url]);
          return true;
        },
        error => {
          console.log('Error creating effect: ' + error);
        }
      )
    } else {
      alert ("Ihre Eingaben sind inkorrekt. Bitte füllen Sie jedes Feld aus");
    }
  }
}
