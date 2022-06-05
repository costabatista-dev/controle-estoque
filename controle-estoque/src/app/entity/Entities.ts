export class Entity {
  public id:number;
  public name:string;


  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
  }
}

export class Brand extends Entity{};
export class Batch extends Entity{};
export class Location extends Entity{};
export class Department extends Entity{};
