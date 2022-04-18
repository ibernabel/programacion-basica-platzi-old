class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero( ){

        resultado.innerHTML =  " ";
        dineroEntregado = [];


        let t = document.getElementById("dinero");

        if(t.value != ""){

            dineroSolicitado = parseInt(t.value);

            if  ( dineroSolicitado     >   0 )    {

                dineroEnCaja = sumarCaja();
                if  ( dineroEnCaja     >   dineroSolicitado ) {

                    for (   let  billete  of  caja   )    {

                            cantidadBillete = Math.floor(  dineroSolicitado    /   billete.valor    );

                            if( cantidadBillete    >   billete.cantidad ) {
                                papeletas = billete.cantidad;
                            }   else {
                                     papeletas = cantidadBillete;
                                }

                            dineroEntregado.push( new Billete(billete.valor, papeletas) );
                            dineroSolicitado = dineroSolicitado - (billete.valor * papeletas);
                            
                        }
                        //  Entrega de dinero
                        if(dineroSolicitado > 0)  {
                            resultado.innerHTML = "El monto solicitado debe ser multiplo de $100";
                        }   else    {
                                    for(let e of dineroEntregado)   {
                                        if(e.cantidad > 0)    {
                                                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
                                            }
                                        }
                                        console.log(dineroEntregado);
                                        sumarCaja();
                            }
                        
                }   else {
                        resultado.innerHTML = "No hay sufuciente dinero para entregar el monto solicitado";
                    }
            }   else {
                    resultado.innerHTML = "Debe ingresar una cantidad a retirar";
                }

        } else {
    resultado.innerHTML = "Debe ingresar una cantidad a retirar";
}
}

// caja.push( new Billete(5, 10 ));

let caja = [];
let dineroEntregado = [];


window.onload = function() {
    caja.push( new Billete(2000, 5) );
    caja.push( new Billete(1000, 10) );
    caja.push( new Billete(500, 20) );
    caja.push( new Billete(200, 20) );
    caja.push( new Billete(100, 20) );
    // caja.push( new Billete(50, 10) );
    // caja.push( new Billete(20, 10) );
    // caja.push( new Billete(10, 10) );
    // init();
    sumarCaja();
};

function aleatorio(min, maxi) {
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

function sumarCaja() {
    let suma = 0;
    for (let c of caja) {
        suma = suma + ( c.valor * c.cantidad );
    }
    dineroDisponible.innerHTML = "Dinero disponible = $" + suma;
    return suma;
}
let dineroSolicitado = 0;
let dineroParaEntregar = 0;
let cantidadBillete = 0;
let papeletas = 0;

let dineroDisponible = document.getElementById("dineroDisponible");
let resultado = document.getElementById("resultado");
let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

document.addEventListener("keyup" , (e) => {
    if (e.keyCode == 13) {
        entregarDinero();
    }           
});