const axios = require('axios');
const tools = require('./tools');
const url_api    = 'http://challenge.dienekes.com.br/api/numbers?page=';
const fileOrigin = './data/data_origin.txt';

init();

function init(){
    tools.log('Iniciando a extração dos dados da API');
    getContext(1);
}

async function getContext(page) {
    try {
        const { data } = await axios(url_api + page);    

        if(data.numbers.length > 0) {

            console.log('Página: ' + page); 
            tools.arrayToFile(fileOrigin, data.numbers);
            getContext(page+1);          //chama recursivamente até acabar

        } else {
            tools.log('Término da extração dos dados da API');
        }
    } catch (error) {
        console.log('Houve erro na resposta');
        getContext(page)
    }
} 