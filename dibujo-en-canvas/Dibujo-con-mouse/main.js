window.onload = function() {

    let teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };
    
    let areaDeDibujo = document.getElementById("canvas_dibujo");
    let lienzo       = areaDeDibujo.getContext("2d");
    let color_dibujo = document.getElementById("input_color");
    
    let color        = color_dibujo.value;
    let grosor_linea = document.getElementById("input_grosor_linea");
    let grosor       = grosor_linea.value;
    let botonBorrar  = document.getElementById("btn_reset");    
    let eje_x;
    let eje_y;
    let mouse_status;

    botonBorrar.addEventListener("click", borrarDibujo);
    color_dibujo.addEventListener("change", () => color = color_dibujo.value );
    grosor_linea.addEventListener("change", () => grosor = grosor_linea.value );
    
    areaDeDibujo.addEventListener("mousedown", presionarMouse);
    areaDeDibujo.addEventListener("mouseup", soltarMouse);
    areaDeDibujo.addEventListener("mousemove", dibujarConMouse);


    // document.addEventListener("mousedown", (e) => console.log(e.layerX , e.layerY ));
    
    
    function dibujarConMouse(evento) {
        if (mouse_status == true) {
            dibujarLinea(lienzo, grosor, color,  eje_x , eje_y, evento.layerX, evento.layerY);
    
        }
        eje_x = evento.layerX;
        eje_y = evento.layerY;
        // console.log("X = " + eje_x);
        // console.log("Y = " + eje_y);
    }
    
    function presionarMouse(evento) {
        mouse_status = true;
        eje_x = evento.layerX;
        eje_y = evento.layerY;
    }
    
    function soltarMouse(evento) {
        mouse_status = false;
        eje_x = evento.layerX;
        eje_y = evento.layerY;
    }
    
    function dibujarLinea(lienzo, grosor, color, xinicial, yinicial, xfinal, yfinal) {
        
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.lineWidth = grosor;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }
}
function borrarDibujo(){
	areaDeDibujo.width = areaDeDibujo.width;
}