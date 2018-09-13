var canvas;
var ctx;
var unit = 10;
window.onload = init;
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.save();
    ctx.translate(0*unit,0*unit);
    drawLuigi1();
    ctx.restore();
    ctx.save();
    ctx.translate(15*unit,0*unit);
    drawLuigi2();
    ctx.restore();
    ctx.save();
    ctx.translate(27*unit,0*unit);
    drawLuigi3();
}
