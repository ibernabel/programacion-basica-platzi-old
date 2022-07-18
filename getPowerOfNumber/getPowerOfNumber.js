function getPower(x , n  ) {
    if (n < 1) {
        alert(`Error! la potencia a la ${n} no esta soportada.  ,
        Use un número mayor o igual a 1`);
        return;
    } 
    return alert(x ** n);
  }

//   Proof:
// getPower(5, 2);
// getPower(5, 3);
// getPower(25, -1);
