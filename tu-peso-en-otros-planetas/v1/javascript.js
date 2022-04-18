//Declaracion de variables mediante entradas de formulario
var texto = document.getElementById("tex_peso");
var selectorSistema = document.getElementById("seleccionCuerpoSistema");

var boton = document.getElementById("boton_peso");

boton.addEventListener("click", calcularPeso );

//Declaracion de variables fijas

var g_sol = ("274");
var g_luna = ("1.62");
var g_mercurio = ("3.7");
var g_venus = ("8.87");
var g_tierra = ("9.81");
var g_marte = ("3.71");
var g_jupiter = ("24.79");
var g_saturno = ("10.44");
var g_urano = ("8.87");
var g_neptuno = ("11.15");
var g_pluton = ("0.62");

//Bucle analizador de cual es el cuerpo del sistema solar seleccionado por el usuario

function calcularPeso()

{
  var cuerpoSistema = selectorSistema.value;
  var pesoFinal;
  var queCuerpoSistema;
  var pesoUsuario = texto.value;
  console.log(pesoUsuario);
  console.log(cuerpoSistema);
  console.log("Boton Oprimido");
  
switch(cuerpoSistema) 
{
   case "1": 
   pesoFinal = (pesoUsuario * g_sol / g_tierra);
   queCuerpoSistema = ("el Sol ");
     break;
   case "2": 
   pesoFinal = pesoUsuario * g_luna / g_tierra;
   queCuerpoSistema = ("la Luna ");
     break;
   case "3": 
   pesoFinal = pesoUsuario * g_mercurio / g_tierra;
   queCuerpoSistema = ("Mercurio "); 
     break;
   case "4": 
   pesoFinal = pesoUsuario * g_venus / g_tierra;
   queCuerpoSistema = ("Venus ");
     break;
    case "5":
    pesoFinal = pesoUsuario * g_marte / g_tierra;
    queCuerpoSistema = ("Marte ");
     break;
    case "6":
    pesoFinal = pesoUsuario * g_jupiter / g_tierra;
    queCuerpoSistema = ("Jupiter ");
     break;
    case "7":
    pesoFinal = pesoUsuario * g_saturno / g_tierra;
    queCuerpoSistema = ("Saturno ");
     break;
     case "8":
    pesoFinal = pesoUsuario * g_urano / g_tierra;
    queCuerpoSistema = ("Urano ");
     break;
     case "9":
    pesoFinal = pesoUsuario * g_neptuno / g_tierra;
    queCuerpoSistema = ("Neptuno ");
     break;
     case "10":
    pesoFinal = pesoUsuario * g_pluton / g_tierra;
    queCuerpoSistema = ("Pluton ");
    break;
    default: 
    pesoFinal = "1000000";
    queCuerpoSistema = ("Krypton ");
}
pesoFinal = parseInt(pesoFinal);
console.log(pesoFinal);
console.log(queCuerpoSistema);
//document.write("Tu peso en " + queCuerpoSistema + "es " + pesoFinal + " Libras");
document.getElementById('resultado').innerHTML=("Tu peso en " + queCuerpoSistema + "es de " + pesoFinal + " Libras");

}
