import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class UpdateStateService {
  constructor(private http: Http) {
  }

  checkIfExists(playName: string, stateName: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/states/' + stateName;

    return this.http.get(url)
      .map(res => res.json());
  }

  updateState(state: Object, playName: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/states';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(state);

    return this.http.post(url, body, headers);
  }
}
