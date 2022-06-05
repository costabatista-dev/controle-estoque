import { Entity } from "./entity/Entities";

export interface Service {
  getAll(): Promise<Entity[]>;
  getById(id:number): Promise<Entity>;
  insert(entity:Entity):void;
  update(entity:Entity):void;
  delete(id:number):void;
}
