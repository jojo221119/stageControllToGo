import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class UpdateSceneService {
  constructor(private http: Http) {
  }

  updateScene(playName: string, scene: Object) {
    let url = serverInfo.host + '/api/plays/' + playName + '/scenes';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(scene);

    return this.http.post(url, body, headers);
  }
}
