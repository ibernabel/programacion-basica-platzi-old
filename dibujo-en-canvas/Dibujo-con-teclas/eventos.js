let teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
let cuadrito = document.getElementById("area_de_dibujo")
let papel = cuadrito.getContext("2d")
let x = 150;
let y = 150;

dibujarLinea("blue", x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xinicial, yinicial,xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    let colorcito = "blue";
    let movimiento = 5;

    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);   
            y = y - movimiento;
        break;
        
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y +  movimiento, papel);        
            y = y + movimiento;
        break;
        
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);    
             x = x - movimiento;
        break;
             
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);        
            x = x + movimiento;
        break;
        default:
            console.log("Otra Tecla")
        break;
    }       

}