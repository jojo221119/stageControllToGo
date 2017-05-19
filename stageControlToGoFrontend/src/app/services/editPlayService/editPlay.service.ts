import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class EditPlayService {
  constructor(private http: Http) {
  }

  checkIfExists(name: string) {
    let url = serverInfo.host + '/api/plays/' + name;

    return this.http.get(url)
      .map(res => res.json());
  }

  getPlayInformation(name: string) {
    let url = serverInfo.host + '/api/plays/' + name;

    return this.http.get(url)
      .map(res => res.json());
  }

  deleteTransmission(playName: string, name: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + name;

    return this.http.delete(url)
      .map(res => res.json());
  }

  playScene(name: string, playName: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/scenes/' + name + '/activate';

    let headers = new Headers({'content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify({});

    return this.http.post(url, body, headers);
  }

  deleteState(playName: string, name: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/states/' + name;

    return this.http.delete(url)
      .map(res => res.json());
  }

  deleteScene(playName: string, name: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/scenes/' + name;

    return this.http.delete(url)
      .map(res => res.json());
  }
}
