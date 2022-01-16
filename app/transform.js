const tools           = require('../tools');
const fileOrigin      = './data/data_origin.txt';
const fileTransformed = './data/data_transformed.txt';

init();

function init(){
    tools.log('Iniciando a transformação dos dados ');

    var arrayOrigin      = tools.fileToArray(fileOrigin);
    var arrayTransformed = mergeSort(arrayOrigin);
    tools.arrayToFile(fileTransformed, arrayTransformed);

    tools.log('Terminou a transformação dos dados');
}

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }   
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2;
    if(array.length < 2){
      return array;
    }    
    const left = array.splice(0, half);
    return merge(mergeSort(left),mergeSort(array));
  }
