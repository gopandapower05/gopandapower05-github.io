var canvas;
var ctx;
var unit = 10;
window.onload = init;
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillRect(2*unit,2*unit,2*unit,2*unit);
    ctx.save();
    ctx.translate(0*unit,0*unit);
    
    drawLuigi1();
    
    ctx.restore();
    ctx.save();
    ctx.translate(1*unit,1*unit);
    drawLuigi2();
    
    ctx.restore();
    ctx.save();
    ctx.translate(27*unit,0*unit);
    drawLuigi3();
    ctx.restore();
}
