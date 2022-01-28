# Product-Graphql-API

Desenvolver as atividades listadas abaixo utilizando Node.js e um banco SQL a escolha do candidato.

Requisitos: Typescript e GralphQL
Diferencial: NestJS

1. Criar a tabela PRODUTOS que deve possuir os seguintes campos:

- ID
- NOME DO PRODUTO
- FABRICANTE
- QUANTIDADE EM ESTOQUE
- VALOR

2. Desenvolver uma WEB API responsável por gerenciar o CRUD(CREATE-READ-UPDATE-DELETE) da tabela no exercicio 1. A API deve possuir as seguintes rotas:

- AdicionarProduto
- AlterarProduto
- BuscarProdutos(rota deve retornar todos os produtos)
- BuscarProdutos(roda deve retornar um produto)
- DeletarProduto
- ObterQuantidadeProdutos(realizar uma busca na tabela e returnar quantidade total de produtos)
- ObterProdutoComMenorEstoque
- ObterProdutoComMaiorEstoque
- ObterProdutosSemEstoque(realizar uma busca para retornar os produtos com estoque menor que 5)

## Implementation

- NestJS
- GralphQL
- TypeORM
- Sqlite

## Build e Execução

Para instalar as dependencias:
yarn

Para iniciar o backend em modo produção:
yarn start:dev

Para criar uma build otimizada
yarn build

Para executar o backend da build:
yarn start
