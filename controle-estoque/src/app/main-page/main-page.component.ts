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
          'link': ''
        },
        {
          'name': 'Movimentações',
          'link': ''
        },
        {
          'name': 'Estoque',
          'link': ''
        },
        {
          'name': 'Lista de Deperamentos',
          'link': ''
        },
        {
          'name': 'Lista de Locais',
          'link': ''
        },
        {
          'name': 'Lista de Lotes',
          'link': ''
        },
        {
          'name': 'Lista de Marcas',
          'link': ''
        }
      ]
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
