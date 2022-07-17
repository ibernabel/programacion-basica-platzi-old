// Esta funcion analiza los numeros primos que hay desde el uno hasta el numero dado como parametro.
// Retorna un aray con los resultados.
function numerosPrimos (numeros) {
    if(numeros < 10000){

        let primos = [];
        for (let i = 2 ; i <= numeros; i++) {
            if (esPrimo (i)){
                primos.push(i);
            }
        }
        return primos;
    } else {
        return "Introduce un número menor a Diez mil";
    }
}

// Esta funcion analiza si un numero dado como parametro es o no es un numero primo.
// Por razones de potencia y velocidad de calculo es recomendable que el numero sea menor a Diez Millones.
function esPrimo (numeros) {
 
    if(numeros < 10000000){

        let count = 0;
        
        for (let i = 2; i < numeros; i++) {
            // Si el numero es multiplo de 2 entonces es un nunero par...
            // ...Por lo tanto No es un numero primo, Exepto el mismo #2
            if (numeros % 2 != 0) {
                
                if (numeros % i == 0) {
                    count++;

                }
            } else {
                return false;
            }
        }
        if (count != 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return "Introduce un número menor a diez millones";
    }
}