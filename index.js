var canvas; 
var ctx;
var unit = 10;
window.onload = init;
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillRect(0,0,500,500)
    head();
}
function head(){
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(15*unit,15*unit,15*unit,unit);
    ctx.fillRect(14*unit,16*unit,17*unit,unit);
    ctx.fillRect(13*unit,17*unit,19*unit,unit);
    ctx.fillRect(12*unit,18*unit,21*unit,unit);
    ctx.fillRect(12*unit,19*unit,21*unit,unit);
    ctx.fillRect(12*unit,20*unit,21*unit,unit);
    ctx.fillRect(12*unit,21*unit,21*unit,unit);
    ctx.fillRect(11*unit,22*unit,23*unit,unit);
    ctx.fillRect(11*unit,23*unit,23*unit,unit);
    ctx.fillRect(11*unit,24*unit,23*unit,unit);
    ctx.fillRect(11*unit,25*unit,23*unit,unit);
    ctx.fillRect(11*unit,26*unit,23*unit,unit);
    ctx.fillRect(11*unit,27*unit,23*unit,unit);
    ctx.fillRect(11*unit,28*unit,23*unit,unit);
    ctx.fillRect(11*unit,29*unit,23*unit,unit);
    ctx.fillRect(11*unit,30*unit,23*unit,unit);
}