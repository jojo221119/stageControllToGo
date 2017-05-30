import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ListChannelsService } from '../../services/listChannelsService/listChannels.service';
import { EditTransmissionService } from '../../services/editTransmissionService/editTransmission.service';
import { EditPlayService } from '../../services/editPlayService/editPlay.service';

@Component({
  moduleId: module.id,
  selector: 'listChannels',
  templateUrl: 'listChannels.component.html',
  providers: [ListChannelsService, EditTransmissionService, EditPlayService]
})

export class ListChannelsComponent implements OnInit {
  playName: string;
  transmission: string;
  device: string;
  channels: Array<any>;
  isChannel: boolean;

  constructor(private listChannelsService: ListChannelsService, private editTransmissionService: EditTransmissionService, private editPlayService: EditPlayService,
    private activatedRoute: ActivatedRoute, private router: Router) {
      this.channels = [];
      this.isChannel = false;
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
    this.listChannelsService.checkIfExists(this.playName, this.transmission, this.device).subscribe(
      data => {
        this.getChannels();
        return true;
      },
      error => {
        this.router.navigate(['/404']);
        return Observable.empty();
      }
    )
  }

  getChannels() {
    this.listChannelsService.getChannels(this.playName, this.transmission, this.device).subscribe(
      data => {
        let correctChannels = 0;
        for(let i = 0; i < data.length; i++) {
          if(data[i] !== null) {
            correctChannels++;
          }
        }
        if(correctChannels == 0) {
          let url = '/play/edit/' + this.playName + '/transmissions/edit/' + this.transmission + '/devices/' + this.device + '/new';
          this.router.navigate([url]);
        } else {
          this.channels = data;
          this.isChannel = true;
        }
      },
      error => {
        alert(error._body);
      }
    )
  }

  deleteChannel(channel: string, number: number) {
    this.listChannelsService.deleteChannel(this.playName, this.transmission, this.device, channel).subscribe(
      data => {
        let url = '/play/edit/' + this.playName + '/transmissions/edit/' + this.transmission + '/devices/' + this.device + '/update/' + channel + '/number/' + number;
        this.router.navigate([url]);
      },
      error => {
        alert(error._body);
      }
    )
  }
}
