import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class SelectPlayService {
  constructor(private http: Http) {
  }

  /*
  * get all listed theatres as JSON from the backend
  */

  getPlays() {

    let url = serverInfo.host + '/api/plays';

    return this.http.get(url)
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json().error));
  }

  sendJSON(input: Object){
    let url = serverInfo.host + '/api/plays';;

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this.http.put(url, input, headers);
  }
}
