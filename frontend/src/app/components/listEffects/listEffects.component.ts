import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { EditPlayService } from '../../services/editPlayService/editPlay.service';
import { ListEffectsService } from '../../services/listEffectsService/listEffects.service';

@Component({
  moduleId: module.id,
  selector: 'listEffects',
  templateUrl: 'listEffects.component.html',
  providers: [EditPlayService, ListEffectsService]
})

export class ListEffectsComponent implements OnInit {
  playName: string;
  sceneName: string;
  scenesFromService: Array<any>;
  scenes: Array<any>;
  effectsFromService: Array<any>;
  effects: Array<any>;
  isEffects: boolean;

  constructor(private editPlayService: EditPlayService, private listEffectsService: ListEffectsService,
    private activatedRoute: ActivatedRoute, private router: Router) {
      this.scenesFromService = [];
      this.scenes = [];
      this.effectsFromService = [];
      this.effects = [];
      this.isEffects = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.sceneName = params['scene'];
    })

    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        this.scenesFromService.push(data.Scenes);
        if(this.scenesFromService.length !== 0) {
          this.getScenes();
          this.getEffects();
          this.getEffectDetails();
          if(this.effects.length !== 0) {
            this.isEffects = true;
          }
        }
        return true;
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

  getScenes() {
    this.solveArray(this.scenesFromService, this.scenes);
  }

  getEffects() {
    let i = 0;
    let isFound = false;;

    while(!isFound) {
      if(this.scenes[i].Name == this.sceneName) {
        this.effectsFromService.push(this.scenes[i].StaticEffects)
        isFound = true;
      }
      i++;
    }
  }

  getEffectDetails() {
    this.solveArray(this.effectsFromService, this.effects);
  }

  deleteEffect(name: string) {
    this.listEffectsService.deleteEffect(this.playName, this.sceneName, name).subscribe(
      data => {
        let isDeleted = false;
        let i = 0;

        while (!isDeleted) {
          if(this.effects[i].Name == name) {
            this.effects.splice(i, 1);
            isDeleted = true;
            if(this.effects.length == 0) {
              this.isEffects = false;
            }
          }
          i++;
        }
        return true;
      },
      error => {
        console.log('Error deleting Effect: ' + error);
      }
    )
  }
}
