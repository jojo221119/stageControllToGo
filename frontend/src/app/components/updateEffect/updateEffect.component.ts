import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UpdateEffectService } from '../../services/updateEffectService/updateEffect.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'updateEffect',
  templateUrl: 'updateEffect.component.html',
  providers: [UpdateEffectService, EditPlayService]
})

export class UpdateEffectComponent implements OnInit  {
  playName: string;
  scene: string;
  deviceChannelsFromService: Array<any>;
  deviceChannels: Array<any>;
  statesFromService: Array<any>;
  states: Array<any>;
  effectExists: boolean;
  effect: string;
  scenesFromService: Array<any>;
  scenes: Array<any>;
  effectsFromService: Array<any>;
  effects: Array<any>;
  sceneExists: boolean;

  constructor(private updateEffectService: UpdateEffectService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.deviceChannels = [];
    this.deviceChannelsFromService = [];
    this.states = [];
    this.statesFromService = [];
    this.effectExists = false;
    this.sceneExists = false;
    this.scenesFromService = [];
    this.scenes = [];
    this.effectsFromService = [];
    this.effects = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.scene = params['scene'];
      this.effect = params['effect'];
    })
    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        this.scenesFromService.push(data.Scenes);

        if(this.scenesFromService.length !== 0) {
          this.checkIfSceneExists();
          if(this.sceneExists) {
            this.checkIfEffectExists();
          } else {
            this.router.navigate(['/404']);
          }
        } else {
          this.router.navigate(['/404']);
        }

        if(this.effectExists) {
          this.deviceChannelsFromService.push(data.DeviceChannels);
          this.statesFromService.push(data.States);
          this.solveArray(this.deviceChannelsFromService, this.deviceChannels);
          this.solveArray(this.statesFromService, this.states);
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

  checkIfSceneExists() {
    this.solveArray(this.scenesFromService, this.scenes);

    let i = 0;
    while((i < this.scenes.length) && !this.sceneExists) {
      if(this.scenes[i].Name == this.scene) {
        this.effectsFromService.push(this.scenes[i].StaticEffects)
        this.sceneExists = true;
      }
      i++;
    }
  }

  checkIfEffectExists() {
    this.solveArray(this.effectsFromService, this.effects);

    let i = 0;
    while((i < this.effects.length) && !this.effectExists) {
      if(this.effects[i].Name == this.effect) {
        this.effectExists = true;
      }
      i++;
    }
  }

  updateEffect(state: string, devChannel: string) {
    if((devChannel != null) && (state != null)) {
      let effectObj = {Name: this.effect, State: state, DeviceChannel: devChannel};

      this.updateEffectService.updateEffect(this.playName, this.scene, effectObj).subscribe(
        data => {
          let url = '/play/edit/' + this.playName + '/scenes/' + this.scene + '/effects';
          this.router.navigate([url]);
          return true;
        },
        error => {
          alert(error._body);
        }
      )
    } else {
      alert ("Ihre Eingaben sind inkorrekt. Bitte füllen Sie jedes Feld aus");
    }
  }
}
