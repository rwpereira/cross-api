var fs = require('fs');   

const { text } = require('express');

module.exports = {

    //Gera um log na tela
    log: function (text) {
      let date = new Date();
      console.log(date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds() + ' - ' + text);
    },

    //Grava os dados em um arquivo texto
    arrayToFile: function (fileName, array){
        try {
            var file = fs.createWriteStream(fileName, { flags: 'a'});
            file.write(arrayToString(array));
            file.end();
        
        } catch (error) {
           console.log('Erro no gravar arquivo');
           console.log(error);
        }    
    },

    //ler um arquivo texto
    fileToArray: function (fileName){
        var array = fs.readFileSync(fileName).toString().trim().split("\n");
        return array;
    }  
};

//Pega um array e monta uma string
function arrayToString (array){
    var text='';
    for (var i = 0; i < array.length; i ++) {
        text += array[i] + '\n';
      }
    return text;  
}


