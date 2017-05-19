import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class NewStateService {
  constructor(private http: Http) {
  }

  createState(state: Object, playName: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/states';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(state);

    return this.http.post(url, body, headers);
  }
}
