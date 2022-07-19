"use strict";

const numbers = [8, 6, 3, 9, 2, 4,1, 7, 5, 1,3 , 9];
// let numbers = [8, 6, 3, 9, 2, 4, 7, 5, 1 ];
// let numbers = [ 10, 3, 7, 5, 8]; // 3, 5, 7, 8, 10
console.group("Original");
    console.log( numbers);
console.groupEnd("Original");

let arraySorted = sortArrayNumbersAscending( numbers );
console.group("Sorted");
    console.log(arraySorted);
console.groupEnd("Sorted");

function sortArrayNumbersAscending( array ) {
    let sortedAscendingArray;
    let i = array.length - 1;

    while (i) {
        sortedAscendingArray = putMinorValueInFirst(array);
        i--;
    }

    return sortedAscendingArray;
}

function putMinorValueInFirst(array ) {
    let tempArray = array;
    let i = array.length - 1;
    let j = i - 1;
    let a;
    let b;
    
    while (i) {

        j = i - 1;
        a = array[i];
        b = array[j];

        if ( iSMinorNumber(a, b ) ) {
            tempArray[i] = b;
            tempArray[j] = a;
        }
        i--;
    }

    return tempArray;
}

function iSMinorNumber( a , b  ) { return a < b }
