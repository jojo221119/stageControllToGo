import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UpdateTransmissionService } from '../../services/updateTransmissionService/updateTransmission.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';
import { EditTransmissionService } from '../../services/editTransmissionService/editTransmission.service';

@Component({
  moduleId: module.id,
  selector: 'updateTransmission',
  templateUrl: 'updateTransmission.component.html',
  providers: [UpdateTransmissionService, EditPlayService, EditTransmissionService]
})

export class UpdateTransmissionComponent implements OnInit  {
  transmissionName: string;
  maxChannels: number;
  playName: string;

  constructor(private updateTransmissionService: UpdateTransmissionService, private editPlayService: EditPlayService, private editTransmissionService: EditTransmissionService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.transmissionName = params['transmission'];
    })
    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        this.checkIfTransmissionExists();
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  checkIfTransmissionExists() {
    this.editTransmissionService.checkIfExists(this.playName, this.transmissionName).subscribe(
      data => {
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }
  updateTransmission(maxChannels: number, type: string) {
    //convert string to integer
    let maxChannel = +maxChannels;

    if ((Number.isInteger(maxChannel)) && (maxChannel > 0) && (maxChannel <= 512) && (type != null)) {
      let transmission = {Name: this.transmissionName, MaxChannel: maxChannel, Type: type};
      this.updateTransmissionService.updateTransmission(transmission, this.playName).subscribe(
        data => {
          let url = '/play/edit/' + this.playName;
          this.router.navigate([url]);
          return true;
        },
        error => {
          console.log('Error updating transmission ' + name + ': ' + error);
        }
      )
    } else {
      alert("Die Eingabefelder sind inkorrekt. Die Anzahl der Kanäle muss eine natürliche Zahl sein!");
    }
  }
}
