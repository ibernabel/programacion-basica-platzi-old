let number = prompt("Quieres que te muestre numeros primos?. Ingresa un numero y te mostrare cuantos numeros primos hay hasta ese numero", '0');
if (!Number(number)) {
    alert("No has escrito nada");
} else {
    
    let primos = [];
    while (number) {
        let i = number;
        let count = 0;

        
        while (i) {
            let isPrimo = number % i;
            if (isPrimo == 0) {
                count++;
            }
            i--;
        }
        
        if (count == 2) {
            primos.unshift(number);
        }
     number--;   
   } 
     for (let i = 0 ; i < primos.length ; i++){
          document.write(primos[i] + "\n");   
        }
    document.write("<br>");
  }
