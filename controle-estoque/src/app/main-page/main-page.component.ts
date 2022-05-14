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
          'link': ''
        },
        {
          'name': 'Lotes',
          'link': ''
        },
        {
          'name': 'Marcas',
          'link': ''
        },
        {
          'name': 'Localizações ',
          'link': ''
        }
      ]
    },
    {
      'title': 'Movimentações de Estoque',
      'childs': [
        {
          'name': 'Entrada',
          'link': ''
        },
        {
          'name': 'Saída',
          'link': ''
        },
        {
          'name': 'Transferência',
          'link': ''
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
