function getMaximun(a , b  ) {
    return alert(a > b ? a : b);
  }

  function getMaximunByArray(array){
      if (!array.length) return alert("Array can not be empty!"); 

      let i = 0;
      let max = array[0];
        while(i < array.length)  {
           if (array[i] > max) max = array[i];
            i++;
        }
        return alert(max);
  }
//   Proof:
// getMaximun(405, 50);
// getMaximun(400, 800);

//   getMaximunByArray([20, 30, 400, 504, 80, 1000, 1200, 50, 800, 5039]);
//   getMaximunByArray([20, 30, 400, 80, 100, 120]);
//   getMaximunByArray([2, 3, 4, 8, 1, 12, 0]);
//   getMaximunByArray([2,1]);
//   getMaximunByArray([2]);
//   getMaximunByArray([0]);
// getMaximunByArray([]);