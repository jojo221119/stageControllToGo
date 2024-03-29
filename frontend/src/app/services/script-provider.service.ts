import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


import 'rxjs/add/operator/toPromise';

import { Script } from '../classes/script';

@Injectable()
export class ScriptProviderService {

  private url = '/api/scripts';

  constructor(private http: Http) { }

  getScripts(): Promise<String[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);

  }


  getScript(scriptName: String): Promise<Script> {
    return this.http.get(this.url + "/" + scriptName)
      .toPromise()
      .then(response => response.json() as Script)
      .catch(this.handleError);

  }

  getPages(scriptName: String): Promise<number[]> {
    return this.http.get(this.url + "/" + scriptName + "/pages")
      .toPromise()
      .then(response => response.json() as number[])
      .catch(this.handleError);
  }

  getPage(scriptName:String, pageNumber:number): Promise<Script> {
    return this.http.get(this.url + "/" + scriptName + "/" + pageNumber)
    .toPromise()
    .then(response => response.json() as Script)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    alert("An error occured " + error.message);
    return Promise.reject(error.message || error);
  }

}
