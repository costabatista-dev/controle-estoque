import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-estoque';
  @Input()
  menuEntries: any = [
    {
      'title': 'Operações de Cadastro',
      'childs': ['Produtos', 'Departamentos', 'Lotes', 'Marcas', 'Localizações ']
    },
    {
      'title': 'Movimentações de Estoque',
      'childs': ['Entrada', 'Saída', 'Transferência']
    },
    {
      'title': 'Consultas',
      'childs': ['Lista de Produtos', 'Movimentações', 'Estoque', 'Lista de Deperamentos',
                 'Lista de Locais', 'Lista de Lotes', 'Lista de Marcas']
    }];

  constructor() {
  }
}
