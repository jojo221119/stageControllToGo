import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class UpdateDeviceService {
  constructor(private http: Http) {
  }

  checkIfExists(playName: string, transmission: string, deviceName: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + deviceName;

    return this.http.get(url)
      .map(res => res.json());
  }

  updateDevice(playName: string, transmission: string, device: Object) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(device);

    return this.http.post(url, body, headers);
  }
}
