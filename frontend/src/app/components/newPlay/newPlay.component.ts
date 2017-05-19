import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NewPlayService } from '../../services/newPlayService/newPlay.service';

@Component({
  moduleId: module.id,
  selector: 'newPlay',
  templateUrl: 'newPlay.component.html',
  providers: [NewPlayService]
})

export class NewPlayComponent  {

  constructor(private newPlayService: NewPlayService, private router: Router) {
  }

  createPlay(name: string) {
    if(name != null) {
      let play = {Name: name};
      this.newPlayService.createPlay(play).subscribe(
        data => {
          this.router.navigate(['/play/edit', name]);
          return true;
        },
        error => {
          console.log('Error creating play ' + name + ': ' + error);
        }
      )
    } else {
      alert("Bitte geben Sie einen Namen für das Theaterstück ein!");
    }
  }
}
