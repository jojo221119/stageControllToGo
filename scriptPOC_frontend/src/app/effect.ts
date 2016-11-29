import { Line } from './line';

export class Effect extends Line{

  effectName:string;

  constructor(id:number, effectName:string){
    super(id);

    this.effectName = effectName;

  }

  getHTML():string {
    return "<p>Effect "+ this.id + "<p>";
  }
}
