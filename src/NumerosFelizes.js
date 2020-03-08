export class NumeroFeliz {
    felicidade(numero) {
        let soma = 0;
        let memoria = []; //Array para guardar os valores das somas dos quadrados dos digitos

        
        while (numero != 1 && !memoria.includes(numero)) {  
            memoria.push(numero);
            let numToStr = numero.toString(); //Transformando em string para facilitar a separação dos dígitos

            for (let i = 0; i < numToStr.length; i++) {
                soma += parseInt(numToStr[i]) ** 2; //Soma dos quadrados dos dígitos
            }

            numero = soma;
            soma = 0;
        }
        
        if (numero == 1) {return true} //Caso o laço seja quebrado por conta de ter chegado a 1, o número é feliz
        
        /* Se, durante o laço, o número resultante da soma dos dígitos do número anterior se repetir (estiver na array 'memoria'), 
        o número nao será feliz, pois o processo entrará em looping e não chegará a 1 */
                    
        return false 
    }
}
