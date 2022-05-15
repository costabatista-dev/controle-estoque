import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = 'controle-estoque';
  @Input()
  menuEntries: any = [
    {
      'title': 'Operações de Cadastro',
      'childs': [
        {
          'name': 'Produtos',
          'link': 'products'
        },
        {
          'name': 'Departamentos',
          'link': 'departments'
        },
        {
          'name': 'Lotes',
          'link': 'batches'
        },
        {
          'name': 'Marcas',
          'link': 'brands'
        },
        {
          'name': 'Localizações ',
          'link': 'locations'
        }
      ]
    },
    {
      'title': 'Movimentações de Estoque',
      'childs': [
        {
          'name': 'Entrada',
          'link': 'stock-entry'
        },
        {
          'name': 'Saída',
          'link': 'stock-out'
        },
        {
          'name': 'Transferência',
          'link': 'stock-transfer'
        }]
    },
    {
      'title': 'Consultas',
      'childs': [
        {
          'name': 'Lista de Produtos',
          'link': 'product-list'
        },
        {
          'name': 'Movimentações',
          'link': 'mov-list'
        },
        {
          'name': 'Estoque',
          'link': 'stock-list'
        },
        {
          'name': 'Lista de Departamentos',
          'link': 'department-list'
        },
        {
          'name': 'Lista de Locais',
          'link': 'location-list'
        },
        {
          'name': 'Lista de Lotes',
          'link': 'batch-list'
        },
        {
          'name': 'Lista de Marcas',
          'link': 'brand-list'
        }
      ]
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
