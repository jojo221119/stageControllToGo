import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class UpdateEffectService {
  constructor(private http: Http) {
  }

  updateEffect(playName: string, sceneName: string, effect: Object) {
    let url = serverInfo.host + '/api/plays/' + playName + '/scenes/' + sceneName + '/effects';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(effect);

    return this.http.post(url, body, headers);
  }
}
