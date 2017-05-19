import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UpdateSceneService } from '../../services/updateSceneService/updateScene.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'updateScene',
  templateUrl: 'updateScene.component.html',
  providers: [UpdateSceneService, EditPlayService]
})

export class UpdateSceneComponent implements OnInit  {
  playName: string;
  brightness: number;
  sceneName: string;
  scenesFromService: Array<any>;
  scenes: Array<any>;
  sceneExists: boolean;

  constructor(private updateSceneService: UpdateSceneService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.brightness = 50;
    this.scenes = [];
    this.scenesFromService = [];
    this.sceneExists = false;
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
          this.checkIfSceneExists();
          if(!this.sceneExists) {
            this.router.navigate(['/404']);
          }
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

  checkIfSceneExists() {
    this.solveArray(this.scenesFromService, this.scenes);

    let i = 0;
    while((i < this.scenes.length) && !this.sceneExists) {
      if(this.scenes[i].Name == this.sceneName) {
        this.sceneExists = true;
      }
      i++;
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

  updateScene(brightness: number) {
    if(brightness !== null) {
      this.brightness = brightness;
    }

    let scene = {Name: this.sceneName, Brightness: this.brightness, FadeInMs: 10};
    this.updateSceneService.updateScene(this.playName, scene).subscribe(
      data => {
        let url = '/play/edit/' + this.playName;
        this.router.navigate([url]);
        return true;
      },
      error => {
        console.log('Error updating scene: ' + error);
      }
    )

  }
}
