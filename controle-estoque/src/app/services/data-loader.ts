import { Entity } from "../entity/Entities";
import { Service } from "./service";

export default abstract class DataLoaderService implements DataLoader {
  public isLoaded: boolean = false;

  constructor(private service: Service) {

  }

  public loadData(): void {
    this.getService().getAll()
      .subscribe((result: Entity[]) => {
        this.setDataSet(result)
        this.isLoaded = true
      })

  }

  public getService(): Service {
    throw new Error("Not implemented yet");
  }

  public setDataSet(dataSet: Entity[]): void {
    throw new Error("Not implemented yet");
  }

  public getDataSet(): Entity[] {
    throw new Error("Not implemented yet");
  }
}

export interface DataLoader {
  getService(): Service;

  setDataSet(dataSet: Entity[]): void;

  getDataSet(): Entity[];
}
