import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class EditTransmissionService {
  constructor(private http: Http) {
  }

  checkIfExists(playName: string, transmission: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission;

    return this.http.get(url)
      .map(res => res.json());
  }

  getDevices(playName: string, transmission: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices';

    return this.http.get(url)
      .map(res => res.json());
  }

  getDeviceDetails(playName: string, transmission: string, device: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + device;

    return this.http.get(url)
      .map(res => res.json());
  }

  deleteDevice(playName: string, transmission: string, device: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + device;

    return this.http.delete(url)
      .map(res => res.json());
  }
}
