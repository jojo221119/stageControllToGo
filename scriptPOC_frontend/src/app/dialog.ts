import { Line } from './line';

export class Dialog extends Line{

  speaker: string;
  text: string;

  constructor(id:number, speaker:string, text: string) {
    super(id);

    this.speaker = speaker;
    this.text = text;
  }

  getHTML():string {
    return "<p id='dialog"+ this.id +"'><span class='speaker'>"+ this.speaker + ": </span>" + this.text + " <p>";
  }
}
