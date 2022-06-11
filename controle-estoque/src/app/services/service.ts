import { Observable } from "rxjs";
import { Entity, Sequence } from "../entity/Entities";

export interface Service {
    getAll(): Observable<Entity[]>;
    getById(id: number): Observable<Entity>;
    insert(entity: Entity): void;
    update(entity: Entity): void;
    delete(id: number): void;
}
