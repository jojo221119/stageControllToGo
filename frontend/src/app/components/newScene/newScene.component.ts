import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewSceneService } from '../../services/newSceneService/newScene.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'newScene',
  templateUrl: 'newScene.component.html',
  providers: [NewSceneService, EditPlayService]
})

export class NewSceneComponent implements OnInit  {
  playName: string;
  brightness: number;

  constructor(private newSceneService: NewSceneService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.brightness = 50;
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

  createScene(name: string, brightness: number) {
    if(brightness !== null) {
      this.brightness = brightness;
    }
    if(name != null) {
      let scene = {Name: name, Brightness: this.brightness, FadeInMs: 10};
      this.newSceneService.createScene(scene, this.playName).subscribe(
        data => {
          let url = '/play/edit/' + this.playName + '/scenes/' + name + '/effects';
          this.router.navigate([url]);
          return true;
        },
        error => {
          console.log('Error creating scene: ' + error);
        }
      )
    } else {
      alert ('Bitte geben Sie einen Namen für die Szene ein');
    }
  }
}
