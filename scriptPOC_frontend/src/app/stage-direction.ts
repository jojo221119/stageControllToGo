import { Line } from './line';

export class StageDirection extends Line{

  stageDirection:string;

  constructor(id:number, stageDirection:string) {
    super(id, 'stageDirection');

    this.stageDirection = stageDirection;
  }

}
