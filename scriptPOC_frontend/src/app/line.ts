

export abstract class Line {
  id: number;

  constructor(id:number){
    this.id = id;
  }

  abstract getHTML():string;
}
