import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../services/brand.service'
import { Brand, Entity } from '../../../entity/Entities';
import { Service } from '../../../services/service';
import { BatchService } from '../../../services/batch.service';
import { LocationService } from '../../../services/location.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Output()
  onChangeName = new EventEmitter();

  @Output()
  onChangeTable = new EventEmitter();

  name: string = "";
  id: number = 0;
  data: Entity[];

  @Input()
  tableTitle: string = "";

  @Input()
  listId: string = "";

  constructor(private route: ActivatedRoute, private brandService: BrandService,
    private batchService: BatchService, private locationService: LocationService,
    private departmentService: DepartmentService) {
    this.data = [];
  }

  ngOnInit(): void {
    let service: Service = this.getService();
    let id = this.route.snapshot.params['id'];

    service.getAll().subscribe(data => this.data = data);

    if (id) {
      id = Number(id);
      service.getById(id).subscribe((result: Brand) => {
        this.edit(result.id, result.name);
      });

    }
  }

  changeName() {
    this.onChangeName.emit({ 'name': this.name });
  }

  changeTableData() {
    this.onChangeTable.emit(this.data);
  }

  save() {
    let service: Service = this.getService();
    let entity: Entity;
    if (this.id == 0) {
      if (this.data.length == 0) {
        entity = new Entity(1, this.name.trim());
        this.data.push(entity);
      }
      else {
        entity = new Entity(this.data[this.data.length - 1].id + 1, this.name.trim())
        this.data.push(entity);
      }
      service.insert(entity);
      alert('Registro salvo com sucesso!')
      this.clearNameField();
      this.id = 0;
    } else {
      let text = "Deseja atualizar o registro?";
      if (confirm(text)) {
        service.update(new Entity(this.id, this.name.trim()));
        let index = this.data.map(x => { return x.id }).indexOf(this.id);
        this.data[index].name = this.name.trim();
        alert('Registro salvo com sucesso!')
        this.clearNameField();
        this.id = 0;
      }
    }
  }

  edit(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    let text = "Deseja remover o registro?";
    if (confirm(text)) {
      this.data = this.data.filter(function (element) {
        return element.id != id;
      })

      this.getService().delete(id);
      this.id = 0;
      this.name = "";
    }

  }

  cancel() {
    this.id = 0;
    this.name = "";
    location.assign(this.listId);
  }


  disableSave() {
    return this.isNameEmpty();
  }

  disableClear() {
    return this.isNameEmpty();
  }

  disableCancel() {
    return this.id == 0;
  }

  isNameEmpty(): boolean {
    return (this.name.match(/^\s*$/g)) ? true : false;
  }

  clearNameField() {
    this.name = "";
  }

  getService(): Service {
    switch (this.listId) {
      case 'brands':
        return this.brandService;
      case 'batches':
        return this.batchService;
      case 'locations':
        return this.locationService;
      case 'departments':
        return this.departmentService;
    }

    throw new Error("Service not found");
  }

}
