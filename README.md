# Catálogo de produtos

Nesse projeto foi desenvolvido um sistema para criar um catálogo de produtos onde usuário pode cadastrar os pordutos com **nome, valor, descrição, categoria e códido do produto**, depois poderá acessar a lista de produtos podendo filtrar por nome, código e categoria.

## Técnologias Utilizadas
![react-plus-nodejs-small png_04e540dd4f](https://user-images.githubusercontent.com/55189046/83953191-97558d00-a814-11ea-8fc2-14bf793553ae.png)
...........................![hiclipart com](https://user-images.githubusercontent.com/56441371/85285208-dd426000-b466-11ea-8a6c-94dac21c8052.png) ![postgres](https://user-images.githubusercontent.com/56441371/85285877-0adbd900-b468-11ea-96ec-6082a20978c9.png)...........................




## Iniciando o projeto

Se você não tiver a imagem do postgresql instalada é necessário instalar, mas para isso é necessário que esteja no usuário root e inserira o comando
 
```docker pull postgres```

Criar um container para o projeto com o comando

```docker run --name nbp -e POSTGRES_PASSWORD=nbp -p 5432:5432 -d postgres```

É preciso criar uma database, para isso é necessário abrir o postgres com o docker usando o comando

```docker exec -it nbp psql -U postgres --password```

Feito isso insira o comando

```create database products;```

Esse comando vai criar a database, depois de criada insira o comando ```\q``` para sair. 

## Iniciando o Backend

Entre na pasta *backend* pelo terminal e insira comando 

```yarn``` ou ```npm install``` 

para instalar todas as dependências do projeto. 

Para importar o banco de dados para o projeto insira o comando 

```yarn sequelize db:migrate``` ou ```npx sequelize db:migrate ```

Rode o servidor com o comando 

```yarn start``` ou ```npm start```

## Iniciando o Frontend

Entre na pasta *frontend* pelo terminal e insira comando 

```yarn``` ou ```npm install``` 

para instalar todas as dependências do projeto. 

Rode o servidor com o comando 

```yarn start``` ou ```npm start```
