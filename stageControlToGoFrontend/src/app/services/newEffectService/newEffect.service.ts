import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class NewEffectService {
  constructor(private http: Http) {
  }

  createEffect(effect: Object, playName: string, scene: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/scenes/' + scene + '/effects';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(effect);

    return this.http.post(url, body, headers);
  }
}
