import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { serverInfo } from '../serverInfo';

@Injectable()
export class ListChannelsService {
  constructor(private http: Http) {
  }

  checkIfExists(playName: string, transmission: string, device: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + device;

    return this.http.get(url)
      .map(res => res.json());
  }

  getChannels(playName: string, transmission: string, device: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + device + '/channels';

    return this.http.get(url)
      .map(res => res.json());
  }

  deleteChannel(playName: string, transmission: string, device: string, channel: string) {
    let url = serverInfo.host + '/api/plays/' + playName + '/transmissions/' + transmission + '/devices/' + device + '/channels/' + channel;

    return this.http.delete(url)
      .map(res => res.json());
  }
}
