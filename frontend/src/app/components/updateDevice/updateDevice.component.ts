import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UpdateDeviceService } from '../../services/updateDeviceService/updateDevice.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';
import { EditTransmissionService } from '../../services/editTransmissionService/editTransmission.service';

@Component({
  moduleId: module.id,
  selector: 'updateDevice',
  templateUrl: 'updateDevice.component.html',
  providers: [UpdateDeviceService, EditPlayService, EditTransmissionService]
})

export class UpdateDeviceComponent implements OnInit  {
  deviceName: string;
  playName: string;
  brightness: number;
  transmission: string;

  constructor(private updateDeviceService: UpdateDeviceService, private editPlayService: EditPlayService, private editTransmissionService: EditTransmissionService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.deviceName = params['device'];
      this.transmission = params['transmission'];
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
    this.editTransmissionService.checkIfExists(this.playName, this.transmission).subscribe(
      data => {
        this.checkIfDeviceExists();
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }
  checkIfDeviceExists() {
    this.updateDeviceService.checkIfExists(this.playName, this.transmission, this.deviceName).subscribe(
      data => {
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  updateDevice(baseAddress: number, numChannels: number, type: string, description: string) {
    let bAddress = +baseAddress;
    let nChannels = +numChannels;

    if((type != null) && (bAddress >= 0) && (nChannels >= 0) && (Number.isInteger(bAddress)) && (Number.isInteger(nChannels))) {
      let device = { Name: this.deviceName, BaseAddress: bAddress, NumChannels: nChannels, Type: type, Description: description };

      this.updateDeviceService.updateDevice(this.playName, this.transmission, device).subscribe(
        data => {
          let url = '/play/edit/' + this.playName + '/transmissions/edit/' + this.transmission;
          this.router.navigate([url]);
          return true;
        },
        error => {
          console.log('Error updating device: ' + error);
        }
      )
    } else {
      alert('Eingabefelder sind inkorrekt!');
    }
  }
}
