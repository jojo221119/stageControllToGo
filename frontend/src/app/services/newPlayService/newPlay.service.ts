import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class NewPlayService {
  constructor(private http: Http) {
  }

  /*
  * create a new play
  */
  createPlay(play: Object) {
    let url = serverInfo.host + '/api/plays';
    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(play);

    return this.http.post(url, body, headers);
  }
}
