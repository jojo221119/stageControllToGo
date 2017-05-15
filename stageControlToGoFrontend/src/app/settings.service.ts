import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class SettingsService {

  constructor(private http:Http) { }

  activateSetting(playName:String, settingName:String) {
    let url = '/api/plays/' + playName + '/scenes/' + settingName + '/activate'

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, {}, options);

  }

}
