# Desafio - Cross Commerce



O projeto consistem em realizar um ETL (Extract, Transform and Load).



Projeto desenvolvido com Node.js, onde após baixar no gitHub, é necessário executar o comando:



**npm install**



### 1 - Extract

Processo que realiza chamadas na API: http://challenge.dienekes.com.br/api/numbers?page=1

onde após a chamada, é realizado a conversão do array para texto e gravado no arquivo texto.

Após é realizado nova chamada, alterando a página até que não haja mais dados.



Ao acontecer um erro, é realizado nova chamada na mesma página.



Para realizar a chamada é necessário executar o comando: 

**node app/extract.js**



Ao terminar a execução teremos um arquivo texto com um array de TODOS os números disponíveis na API.



### 2 - Transform

Esse processo consiste na transformação dos dados, onde após várias pesquisas, a técnica escolhida para a ordenação dos dados que melhor tive a performance foi a de MergeSort.

Para realizar a chamada é necessário executar o comando:

**node app/transform.js**



### 3 - Load

Consiste na publicação de uma API para distribuir os novos dados.  É necessário que os dois passos anteriores tenha sido executado antes.

Para a execução em base local, é necessário executar o comando:

**npm start**



Fiz uma publicação no Heroku:  https://ronaldo-cross-api.herokuapp.com/numbers?page=1





