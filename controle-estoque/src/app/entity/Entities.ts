export class Entity {
  public id:number;
  public name:string;


  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
  }
}

export class Brand extends Entity{};
