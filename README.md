# Sobre o Projeto

# API Star Wars (https://swapi.dev/)

## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|
 
 ## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `PATCH` | Atualiza um registro. |

### Como executar
* Clone o repositório
* Instale as dependências com ```npm install```
* Inicie o servidor com ```npm run start:dev```
* Ao iniciar a aplicação será carregado em memória a lista de filmes;

 ### EndPoints 
 Método GET
- [x]  **"/"** Deverá retornar todas os filmes da saga.
- [x]  **"/:id"** Deverá retornar informações de um filme específico.
<br>

Método PATCH
- [x]  "**/:episode_id**" Deverá alterar a descrição de um filme em memória
 <br>



```jsx
