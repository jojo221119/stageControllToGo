import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class UpdateTransmissionService {
  constructor(private http: Http) {
  }

  updateTransmission(transmission: Object, playName: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(transmission);

    return this.http.post(url, body, headers);
  }
}
