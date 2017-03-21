import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


import 'rxjs/add/operator/toPromise';

import { Script } from './script';

@Injectable()
export class ScriptProviderService {

  private scriptUrl = '/api/script';

  constructor(private http: Http) { }

  getScript(): Promise<Script> {
    //return Promise.resolve(MOCKSCRIPT)
    return this.http.get(this.scriptUrl)
      .toPromise()
      .then(response => response.json() as Script)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
