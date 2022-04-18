//variables
var canvas = document.getElementById("dibujito");//Area del canva
var lienzo = canvas.getContext("2d");//Area del Lienzo

//Modificadores del tamano del canvas
/**var rangeAncho = document.getElementById("rangeAncho");
var rangeAlto = document.getElementById("rangeAlto");
var rw = rangeAncho.value;
var rh = rangeAlto.value;
rangeAncho.addEventListener("mouseup",);
angeAlto.addEventListener("mouseup", );

canvas.style.width = "1200px";
canvas.style.height = "600px";**/

var numero = document.getElementById("numero_lineas");
numero.addEventListener("keyup", dibujoPorClick);

var c = document.getElementById("coloreame");
c.addEventListener("blur", dibujoPorClick);

var boton = document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorClick);


//Boton de Limpiar Canvas
var borrar = document.getElementById("borrar");
borrar.addEventListener("click", borrarDibujo);


//Funcion que dibuja llas lineas
function dibujoPorClick()
{
    borrarDibujo();
let ancho = canvas.width;
let alto = canvas.height;
let lineas = parseInt(numero.value);
let coloreando = c.value;
let espacioAncho = ancho / lineas;
let espacioAlto = alto / lineas;
let l;
let xi, yi, xf, yf;


//Lineas de los bordes
dibujarLinea(coloreando, 1, 1, 1, alto - 1);
dibujarLinea(coloreando, 1, alto - 1, ancho - 1, alto - 1);
dibujarLinea(coloreando, 1, 1, ancho - 1, 1);
dibujarLinea(coloreando, ancho - 1, 1, ancho - 1, alto - 1);

//ciclo iterador Grafico arriba-izquierda  
for(l = 0; l < lineas; l++)
{
    xi = ancho / 2;
    yi = (alto / 2) - (espacioAlto * l);
    xf = (espacioAncho * l) / 2;
    yf = alto / 2;

    dibujarLinea(coloreando,xi , yi, xf, yf);
    //console.log("linea " + l);
}

//ciclo iterador grafico arriba-derecha
for(l = 0; l < lineas; l++)
{
    xi = ancho / 2 ;
    yi = (alto / 2) + (espacioAlto * l);
    xf = (ancho / 2) - (espacioAncho * l);
    yf = alto;

    dibujarLinea(coloreando,xi , yi, xf, yf);
    //console.log("linea " + l);
}

/**ciclo iterador grafico abajo-derecha
for( l = 0; l < lineas; l++)
{
    xi = ancho -1;
    yi = espacioAlto * l;
    xf = ancho - (espacioAncho * (l + 1));
    yf = alto - 1;

    dibujarLinea(coloreando, xi , yi, xf, yf);
    //console.log("linea " + l);
    
}

//ciclo iterador grafico abajo-izquierda
for(l=0; l < lineas; l++)
{
    xi = 0;
    yi = espacioAlto * l;
    xf = espacioAncho * (l + 1);
    yf = alto - 1;

    dibujarLinea(coloreando, xi , yi, xf, yf);
    //console.log("linea " + l);
}**/

//Funcion que dibuja las lineas
function dibujarLinea(color, xinicial, yinicial,xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
}

//Funcion de borrar dibujo
function borrarDibujo(){
	canvas.width=canvas.width;
}