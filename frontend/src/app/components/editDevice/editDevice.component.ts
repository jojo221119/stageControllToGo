import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { EditDeviceService } from '../../services/editDeviceService/editDevice.service';
import { EditTransmissionService } from '../../services/editTransmissionService/editTransmission.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'editDevice',
  templateUrl: 'editDevice.component.html',
  providers: [EditDeviceService, EditTransmissionService, EditPlayService]
})

export class EditDeviceComponent implements OnInit {
  playName: string;
  transmission: string;
  device: string;
  numChannels: number;
  name: string;
  type: string;
  channels: Array<any>;
  isChannelOk: boolean;

  constructor(private editDeviceService: EditDeviceService, private editTransmissionService: EditTransmissionService, private editPlayService: EditPlayService,
    private activatedRoute: ActivatedRoute, private router: Router) {
      this.channels = [];
      this.isChannelOk = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.transmission = params['transmission'];
      this.device = params['device'];
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
    this.editDeviceService.checkIfExists(this.playName, this.transmission, this.device).subscribe(
      data => {
        this.numChannels = data.NumChannels;
        for(let i = 1; i <= this.numChannels; i++) {
          let channel = {name: "", type: "", numChannels: i};
          this.channels.push(channel);
        }
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  createChannels() {
    let httpSuccess = true;

    for(let i = 0; i < this.numChannels; i++) {
      if((this.channels[i].name == "") || (this.channels[i].type == "")) {
        this.isChannelOk = false;
      }
    }

    if(this.isChannelOk) {
      for(let j = 0; j < this.numChannels; j++) {
        let channel = {Name: this.channels[j].name, Type: this.channels[j].type, ChannelNumber: (j+1) };

        this.editDeviceService.createChannels(this.playName, this.transmission, this.device, channel).subscribe(
          data => {
            return true;
          },
          error => {
            httpSuccess = false;
            alert(error._body);
          }
        )
      }

      if(httpSuccess) {
        let url = '/play/edit/' + this.playName + '/transmissions/edit/' + this.transmission;
        this.router.navigate([url]);
      }

    } else {
      alert('Die Eingabefelder sind inkorrekt. Alle Felder müssen ausgefüllt werden.');
    }
  }

}
