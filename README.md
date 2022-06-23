# Controle Estoque

Este projeto tem como objetivo implementar progressivamente e de forma didática uma aplicação web inspirada em operações de controle de estoque para mercearias (mercado, controle de estoque em geral) .

Dentre as operações permitidas pelo sistema, estão:
- Cadastro:
  - cadastro de produtos
  - cadastro de marcas
  - cadastro de departamentos
  - cadastro de localizações
  - cadastro de lotes
- Movimentações de estoque:
  - entrada
  - saída
  - transferência
- Consultas
  - listagem de produtos
  - listagem de departamentos
  - listagem de movimentações
  - listagem de locais
  - listagem de estoque
  - listagem de lotes
  - listagem de marcas

O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

# Endereço de Deploy - GitHub Pages

https://paulobatistadev.github.io/controle-estoque/

# Protótipo

https://github.com/paulobatistadev/controle-estoque/tree/master/wireframes-web

**Observação: Protótipo realizado a partir da ferramenta Pencil (https://pencil.evolus.vn/), disponível para ser acessado como página com interações a partir do repositório principal do projeto, a partir do arquivo index.html disposto na página citada acima**

# Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.

**Observação: Adicional ao que foi proposto, foi realizado a criação de um componente Angular que permite a manipulação da propriedade ngModel, sendo um tipo adicional de data-binding**


# Instruções para teste da aplicação
Para simular o backend a partir do json-server, foi disponibilizado um comando por meio do arquivo package.json, sendo este:
```
npm run server
```

Então, com isso, será possível a utilização da simulação da base de dados.

Em seguida, para fins de teste, é possível executar o projeto com o comando:

```
npm run start
```

No entanto, caso queira executar os dois comandos em uma única instrução, é possível a partir do seguinte comando:

```
npm run dev
```
Com esse comando, o backend será simulado e seguido da inicialização do aplicativo em uma aba do navegador padrão do host de execução.
