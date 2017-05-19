import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ListChannelsService } from '../../services/listChannelsService/listChannels.service';
import { EditTransmissionService } from '../../services/editTransmissionService/editTransmission.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';
import { UpdateChannelService } from '../../services/updateChannelService/updateChannel.service';

@Component({
  moduleId: module.id,
  selector: 'updateChannel',
  templateUrl: 'updateChannel.component.html',
  providers: [ListChannelsService, EditTransmissionService, EditPlayService, UpdateChannelService]
})

export class UpdateChannelComponent implements OnInit {
  playName: string;
  transmission: string;
  device: string;
  channelName: string;
  channelNumber: number;
  deviceChannels: Array<any>;

  constructor(private listChannelsService: ListChannelsService, private editTransmissionService: EditTransmissionService, private editPlayService: EditPlayService, private updateChannelService: UpdateChannelService,
    private activatedRoute: ActivatedRoute, private router: Router) {
      this.deviceChannels = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.playName = params['title'];
      this.transmission = params['transmission'];
      this.device = params['device'];
      this.channelName = params['channel'];
      this.channelNumber = params['channelNumber'];
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
    this.listChannelsService.checkIfExists(this.playName, this.transmission, this.device).subscribe(
      data => {
        this.checkIfChannelExists();
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  checkIfChannelExists() {
    this.listChannelsService.getChannels(this.playName, this.transmission, this.device).subscribe(
      data => {
        this.deviceChannels = data;

        let i = 0;
        let channelExists = false;

        while(!channelExists && (i < this.deviceChannels.length)) {
          if(this.deviceChannels[i].Name == this.channelName) {
            channelExists = true;
          }
          i++;
        }

        if(!channelExists) {
          this.router.navigate(['/404']);
        }
      },
      error => {
        console.log('Error getting channels: ' + error);
      }
    )
  }

  updateChannel(type: string) {
    if(type != null) {
      let cn = +this.channelNumber;
      let channel = {Name: this.channelName, Type: type, ChannelNumber: cn};
      this.updateChannelService.updateChannel(this.playName, this.transmission, this.device, channel).subscribe(
        data => {
          let url = '/play/edit/' + this.playName + '/transmissions/edit/' + this.transmission + '/devices/' + this.device;
          this.router.navigate([url]);
          return true;
        },
        error => {
          console.log('Error updating Channel: ' + error);
        }
      )
    } else {
      alert('Die Eingabefelder sind inkorrekt. Es muss ein Typ ausgewählt werden.');
    }

  }
}
