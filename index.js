var canvas; 
var ctx;
var unit = 5;
window.onload = init;
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillRect(0,0,500,500)
    head();
}
function head(){
    ctx.fillStyle = "rgb(142,122,121)";
    ctx.fillRect(19*unit,18*unit,27*unit,2*unit);
    ctx.fillRect(45*unit,19*unit,5*unit,2*unit);
    ctx.fillRect(49*unit,20*unit,5*unit,2*unit);
    ctx.fillRect(51*unit,21*unit,3*unit,2*unit);
    ctx.fillRect()
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(20*unit,20*unit,25*unit,2*unit);
    ctx.fillRect(15*unit,21*unit,34*unit,2*unit);
    ctx.fillRect(13*unit,22*unit,38*unit,2*unit);
    ctx.fillRect(11*unit,23*unit,42*unit,2*unit);
    ctx.fillRect(12)
}