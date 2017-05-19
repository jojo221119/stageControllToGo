import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewTransmissionService } from '../../services/newTransmissionService/newTransmission.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'newTransmission',
  templateUrl: 'newTransmission.component.html',
  providers: [NewTransmissionService, EditPlayService]
})

export class NewTransmissionComponent implements OnInit  {
  name: string;
  maxChannels: number;
  playName: string;

  constructor(private newTransmissionService: NewTransmissionService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {

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

  createTransmission(name: string, maxChannels: number, type: string) {
    //convert string to integer
    let maxChannel = +maxChannels;

    if ((Number.isInteger(maxChannel)) && (maxChannel > 0) && (maxChannel <= 512) && (name != null) && (type != null)) {
      let transmission = {Name: name, MaxChannel: maxChannel, Type: type};

      this.newTransmissionService.createTransmission(transmission, this.playName).subscribe(
        data => {
          let url = '/play/edit/' + this.playName;
          this.router.navigate([url]);
          return true;
        },
        error => {
          console.log('Error creating transmission ' + name + ': ' + error);
        }
      )
    } else {
      alert("Die Eingabefelder sind inkorrekt. Der Name darf nicht leer sein und die Anzahl der Kanäle muss eine natürliche Zahl sein!");
    }
  }
}
