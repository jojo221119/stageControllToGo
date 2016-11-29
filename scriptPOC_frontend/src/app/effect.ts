import { Line } from './line';

export class Effect extends Line{

  effectName:string;

  constructor(id:number, effectName:string){
    super(id, 'effect');

    this.effectName = effectName;

  }

  startEffect():void{
    alert('Effect' + this.id);
  }

}
