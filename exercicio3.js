

function parOuImpar(entrada){

    if (typeof entrada !== `number`){
        return 'Digite uma entrada válida!'
    } else if(entrada%2 ===0) {
        return entrada + ' é par'
    } else if (entrada%2 !==0){
        return entrada + ' é ímpar'
    }
  
}

console.log(parOuImpar('10'))