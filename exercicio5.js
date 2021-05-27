
function calculadora(num1 , num2){

    let operacao = "subtracao"
    switch(operacao){
        case "soma" :
            return num1 + num2
            break;
        case "subtracao" :
            return num1 - num2
            break;
        case "multiplicação" :
            return num1 * num2
            break;
        case "divisao" :
            return num1/num2
            break;
            
            default :
            console.log("ERROR")
    }
}
     console.log (calculadora(20,2))