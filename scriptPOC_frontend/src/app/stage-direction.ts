import { Line } from './line';

export class StageDirection extends Line{

  stageDirection:string;

  constructor(id:number, stageDirection:string) {
    super(id);

    this.stageDirection = stageDirection;
  }

  getHTML():string {
    return "<p>StageDirection "+ this.id + "<p>";
  }
}
