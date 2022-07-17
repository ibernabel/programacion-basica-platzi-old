
function calcularBinario (decimal) {
    // let i = decimal;
    let m;
    let result = [];
    while (decimal >=  1 ){
            m = Math.floor(decimal % 2);
            // console.log(m)
            // console.log(decimal)
            decimal = decimal / 2;

            result.unshift(m);

    }
    console.log(result.toString(result));
    // return result;
}