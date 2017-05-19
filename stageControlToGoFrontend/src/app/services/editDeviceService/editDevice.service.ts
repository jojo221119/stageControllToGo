import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class EditDeviceService {
  constructor(private http: Http) {
  }

  checkIfExists(playName: string, transmission: string, device: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + device;

    return this.http.get(url)
      .map(res => res.json());
  }

  createChannels(playName: string, transmission: string, device: string, channel: Object) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + device + '/channels';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(channel);


    return this.http.post(url, body, headers);
  }
}
