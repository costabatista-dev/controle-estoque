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
export class Product extends Entity{

  constructor(id:number, name:string) {
    super(id, name);
  }


  description:string='';
  brand:number=0;
  department:number=0;
  price:number=0;
};

export class Movement extends Entity {
  product:number;
  batch:number;
  type:string;
  quantity:number;
  locationFrom:number=0;
  locationTo:number=0;

  constructor(id:number, product:number, batch:number, type:string, quantity: number) {
    super(id, '');
    this.product = product;
    this.batch = batch;
    this.type = type;
    this.quantity = quantity;
  }


}
