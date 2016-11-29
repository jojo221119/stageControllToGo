import { Line } from './line';

export class Dialog extends Line{

  speaker: string;
  text: string;

  constructor(id:number, speaker:string, text: string) {
    super(id, 'dialog');

    this.speaker = speaker;
    this.text = text;
  }

}
