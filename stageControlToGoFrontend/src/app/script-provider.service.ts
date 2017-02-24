import { Injectable } from '@angular/core';

import { Document } from './document';

export const MOCKSCRIPT: Document = {body:
  [
      {
    name:"test",
    body:[
      {
        type:"text",
        body:"HALLO"
      }
    ]
  },
  {
    name:"test2",
    body:[
      {
        type:"text",
        body:"HALLO2"
      }
    ]
  },
  {
    name:"",
    body:[
      {
        type:"regie",
        body:"HALLO"
      }
    ]
  }
]
};

@Injectable()
export class ScriptProviderService {



  constructor() { }

  getScript():Document {
    return MOCKSCRIPT;
  }

}
