var canvas; 
var ctx;
var unit = 10;
function drawIce(){
    ctx.fillStyle = "rgb(191,255,255)";
    ctx.fillRect(0*unit,15*unit,20*unit,10*unit);
}
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    drawIce()
}