let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
let cc = document.getElementById("canvasCerdo");
let canvasCerdo = cc.getContext("2d");

let teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

let fondo = {
  url: "tile.png",
  cargaOK: false
}
let vaca = {
  url: "vaca.png",
  cargaOK: false
}
let cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    positionX : 0,
    positionY : 0

  }
let pollo = {
    url: "pollo.png",
    cargaOK: false
}
// let cantidad = aleatorio(1, 10);

document.addEventListener("keydown", moverCerdo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujarCerdo();
}






function dibujar() {
    // Cargar Fondo
  if(fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  
    // Cargar Vacas
  if(vaca.cargaOK) {
    let cantidadVacas = aleatorio(3, 10);
    // console.log(cantidadVacas + " Vacas");

    for(let v=0; v < cantidadVacas; v++) {
      let x = aleatorio(0, 7);
      let y = aleatorio(0, 10);
          x = x * 60;
          y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  
    // Cargar Pollos   
  if(pollo.cargaOK) {
    let cantidadPollos = aleatorio(5, 20);
    // console.log(cantidadPollos + " Pollos");
    
    for(let p=0; p < cantidadPollos; p++) {
      let x = aleatorio(0, 7);
      let y = aleatorio(0, 10);
          x = x * 60;
          y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
  }

}
function dibujarCerdo() {
        // Cargar Cerdo   
  if(cerdo.cargaOK) {
    // let cantidadCerdos = aleatorio(1, 10);
    let cantidadCerdos = 1;

    // console.log(cantidadCerdos + " Cerdos");
    
    for(let c = 0; c < cantidadCerdos; c++) {
      let x = aleatorio(0, 7);
      let y = aleatorio(0, 10);
          x = x * 60;
          y = y * 40;
      canvasCerdo.drawImage(cerdo.imagen, x, y);

      cerdo.positionX = x;
      cerdo.positionY = y;
    }
  }
}

function aleatorio(min, maxi) {
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

function moverCerdo(evento) {
    if(cerdo.cargaOK) {
        
        if(evento.keyCode == teclas.UP) {
            if(cerdo.positionY > -20) {
                x = cerdo.positionX;
                y = cerdo.positionY - 10;
                canvasCerdo.clearRect(0,0, cc.width, cc.height);
                canvasCerdo.drawImage(cerdo.imagen, x, y);
                cerdo.positionY = y;
                // console.log(cerdo.positionY);
            }
        }
        if(evento.keyCode == teclas.DOWN) {
            if(cerdo.positionY < 440) {
                x = cerdo.positionX;
                y = cerdo.positionY + 10;
                canvasCerdo.clearRect(0,0, cc.width, cc.height);
                canvasCerdo.drawImage(cerdo.imagen, x, y);
                cerdo.positionY = y;
                // console.log(cerdo.positionY);
            }
        }
        if(evento.keyCode == teclas.LEFT) {
            if(cerdo.positionX > -10) {
                x = cerdo.positionX - 10;
                y = cerdo.positionY;
                canvasCerdo.clearRect(0,0, cc.width, cc.height);
                canvasCerdo.drawImage(cerdo.imagen, x, y);
                cerdo.positionX = x;
                // console.log(cerdo.positionX);
            }

        }
        if(evento.keyCode == teclas.RIGHT) {
            if(cerdo.positionX < 430) {
                x = cerdo.positionX + 10;
                y = cerdo.positionY;

                canvasCerdo.clearRect(0,0, cc.width, cc.height);
                canvasCerdo.drawImage(cerdo.imagen, x, y);
                cerdo.positionX = x;
                // console.log(cerdo.positionX);
            }

        }

    }

}