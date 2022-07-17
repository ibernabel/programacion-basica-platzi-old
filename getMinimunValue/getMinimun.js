function getMinimun(a , b  ) {
    return a < b ? a : b;
  }

  function getMinimunByArray(array){
      if (!array.length) return alert("Array can not be empty!"); 

      let i = 0;
      let min = array[0];
        while(i < array.length)  {
           if (array[i] < min) min = array[i];
            i++;
        }
        return alert(min);
  }
//   Proof:
//   getMinimunByArray([20, 30, 400, 80, 100, 120]);
//   getMinimunByArray([2, 3, 4, 8, 1, 12, 0]);
//   getMinimunByArray([2,1]);
//   getMinimunByArray([2]);
//   getMinimunByArray([0]);
//   getMinimunByArray([]);