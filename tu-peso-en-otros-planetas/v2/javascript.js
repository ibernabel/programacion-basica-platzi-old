//Declaracion de variables mediante entradas de formulario
var texto = document.getElementById("tex_peso");

var boton = document.getElementById("boton_peso");

window.addEventListener("load", calcularPeso);
boton.addEventListener("click", calcularPeso);
texto.addEventListener("keyup", calcularPeso);

//Declaracion de variables fijas

const g_sol = ("274");
const g_luna = ("1.62");
const g_mercurio = ("3.7");
const g_venus = ("8.87");
const g_tierra = ("9.81");
const g_marte = ("3.71");
const g_jupiter = ("24.79");
const g_saturno = ("10.44");
const g_urano = ("8.87");
const g_neptuno = ("11.15");
const g_pluton = ("0.62");



function calcularPeso()

{
  //Declaracion de variables de la funcion
  let pesoFinal;
  let pesoUsuario = texto.value;
  let x;
  let sistema;

  for (x = 1 ; x <= 11 ; x++)
  { 
    // console.log(x);

//Bucle analizador de cual es el cuerpo del sistema solar seleccionado por el usuario
      switch(x)
      {
        case 1: 
        sistema = g_sol;
          break;
        case 2: 
        sistema = g_luna;
          break;
        case 3: 
        sistema = g_mercurio;
          break;
        case 4: 
        sistema = g_venus;
          break;
        case 5:
        sistema = g_tierra;
          break;
        case 6:
        sistema = g_marte;
          break;
        case 7:
        sistema = g_jupiter;
          break;
        case 8:
        sistema = g_saturno;
          break;
        case 9:
        sistema = g_urano;
          break;
        case 10:
        sistema = g_neptuno;
          break;
          default: 
        sistema = g_pluton;
        }
        console.log(sistema);
        
        //Formula de Calculo del Peso en otros cuerpos del sistema solar
        pesoFinal = (pesoUsuario * sistema / g_tierra);
        pesoFinal = parseInt(pesoFinal);// Conversion de variable de numero a texto
        document.getElementById(x).innerHTML=(pesoFinal + "Libras");
        // document.write(pesoFinal + "<br> ");
    }
    
}
