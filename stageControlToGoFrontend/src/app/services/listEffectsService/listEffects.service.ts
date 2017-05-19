import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class ListEffectsService {
  constructor(private http: Http) {
  }

  deleteEffect(playName: string, sceneName: string, effectName: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/scenes/' + sceneName + '/effects/' + effectName;

    return this.http.delete(url)
      .map(res => res.json());
  }
}
