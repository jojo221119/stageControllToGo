import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewDeviceService } from '../../services/newDeviceService/newDevice.service';
import { EditTransmissionService } from '../../services/editTransmissionService/editTransmission.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'newDevice',
  templateUrl: 'newDevice.component.html',
  providers: [NewDeviceService, EditTransmissionService, EditPlayService]
})

export class NewDeviceComponent implements OnInit  {
  playName: string;
  transmission: string;
  name: string;
  baseAddress: number;
  numChannels: number;
  type: string;
  description: string;

  constructor(private newDeviceService: NewDeviceService, private editTransmissionService: EditTransmissionService,
    private editPlayService: EditPlayService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.transmission = params['transmission'];
    })
    //check if play exists
    this.editPlayService.checkIfExists(this.playName).subscribe(
      data => {
        this.editTransmissionService.checkIfExists(this.playName, this.transmission).subscribe(
          data => {
            return true;
          },
          error => {
            this.router.navigate(['/404']);
            return Observable.empty();
          }
        );
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  createNewDevice(playName: string, transmission: string, name: string, baseAddress: number, numChannels: number, type: string, description: string) {
    let bAddress = +baseAddress;
    let nChannels = +numChannels;

    if((name != null) && (type != null) && (bAddress >= 0) && (nChannels >= 0) && (Number.isInteger(bAddress)) && (Number.isInteger(nChannels))) {
      let device = { Name: name, BaseAddress: bAddress, NumChannels: nChannels, Type: type, Description: description };

      this.newDeviceService.createNewDevice(playName, transmission, device).subscribe(
        data => {
          let url = '/play/edit/' + playName + '/transmissions/edit/' + transmission;
          this.router.navigate([url]);
          return true;
        },
        error => {
          alert(error._body);
        }
      )
    } else {
      alert('Eingabefelder sind inkorrekt!');
    }

  }
}
