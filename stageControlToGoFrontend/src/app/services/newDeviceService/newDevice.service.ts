import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class NewDeviceService {
  constructor(private http: Http) {
  }

  createNewDevice(playName: string, transmission: string, device: Object) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(device);

    return this.http.post(url, body, headers);
  }
}
