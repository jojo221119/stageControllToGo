import { Injectable } from '@angular/core';

import { Line } from './line';
import { Effect } from './effect';
import { StageDirection } from './stage-direction';
import { Dialog } from './dialog';

export const MOCKSCRIPT: Line[] = [
  new Effect(11, 'TollesLicht'),
  new Effect(12, 'TollesLicht'),
  new Effect(13, 'TollesLicht'),
  new StageDirection(14, 'GehtAb'),
  new StageDirection(15, 'GehtAb'),
  new StageDirection(16, 'GehtAb'),
  new Dialog(17, 'Tom', 'Hallo'),
  new Dialog(18, 'Tom', 'Hallo'),
  new Dialog(19, 'Tom', 'Hallo')
];

@Injectable()
export class ScriptProviderService {



  constructor() { }

  getScript():Line[] {
    return MOCKSCRIPT;
  }

}
