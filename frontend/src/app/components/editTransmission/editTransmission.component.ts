import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { EditTransmissionService } from '../../services/editTransmissionService/editTransmission.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'editTransmission',
  templateUrl: 'editTransmission.component.html',
  providers: [EditTransmissionService, EditPlayService]
})

export class EditTransmissionComponent implements OnInit {
  playName: string;
  transmission: string;
  isDevice: boolean;
  devicesFromService: Array<any>;
  devices: Array<any>;

  constructor(private editTransmissionService: EditTransmissionService, private editPlayService: EditPlayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.isDevice = false;
    this.devicesFromService = [];
    this.devices = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.transmission = params['transmission'];
    })
    //check if play exists
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

  checkIfTransmissionExists(){
    this.editTransmissionService.checkIfExists(this.playName, this.transmission).subscribe(
      data => {
        this.getDevices();
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  getDevices() {
    this.editTransmissionService.getDevices(this.playName, this.transmission).subscribe(
      data => {
        if(data.length !== 0) {
          this.devicesFromService.push(data);
          this.isDevice = true;
          this.getDeviceDetails();
        }
      },
      error => {
        alert(error._body);
      }
    )
  }

  getDeviceDetails() {
    for(let i = 0; i < this.devicesFromService[0].length; i++) {
      this.editTransmissionService.getDeviceDetails(this.playName, this.transmission, this.devicesFromService[0][i]).subscribe(
        data => {
          this.devices.push(data);
        },
        error => {
          alert(error._body);
        }
      )
    }
  }

  deleteDevice(device: string) {
    this.editTransmissionService.deleteDevice(this.playName, this.transmission, device).subscribe(
      data => {
        let isDeleted = false;
        let i = 0;

        while (!isDeleted) {
          if(this.devices[i].Name == device) {
            this.devices.splice(i, 1);
            isDeleted = true;
            if(this.devices.length == 0) {
              this.isDevice = false;
            }
          }
          i++;
        }
        return true;
      },
      error => {
        alert(error._body);
      }
    )
  }
}
