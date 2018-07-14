var canvas;
var ctx;
var unit = 25;
window.onload = init; // When the window loads, run the init function
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgb(250,193,0)'; // Setting the colour of filling
    ctx.fillRect(2*unit,0,9*unit,unit);
    ctx.fillRect(unit,unit,11*unit,unit );
    ctx.fillRect(0,2*unit,13*unit,11*unit);
    ctx.fillStyle = 'rgb(135,135,135)';
    ctx.fillRect(2*unit,1*unit,3*unit,unit);
    ctx.fillRect(5*unit,2*unit,unit,unit);
    ctx.fillRect(6*unit,3*unit,unit,3*unit);
    ctx.fillRect(unit,2*unit,unit,unit);
    ctx.fillRect(0,3*unit,unit,3*unit);
    ctx.fillRect(unit,6*unit,unit,unit);
    ctx.fillRect(2*unit,7*unit,3*unit,unit);
    ctx.fillRect(5*unit,6*unit,unit,unit);
    ctx.fillRect(7*unit,6*unit,unit,unit);
    ctx.fillRect(8*unit,7*unit,3*unit,unit);
    ctx.fillRect(11*unit,6*unit,unit,unit);
    ctx.fillRect(12*unit,3*unit,unit,3*unit);
    ctx.fillRect(11*unit,2*unit,unit,unit);
    ctx.fillRect(8*unit,unit,3*unit,unit);
    ctx.fillRect(7*unit,2*unit,unit,unit);
    ctx.fillStyle = 'rgb(254,255,253)';
    ctx.fillRect(2*unit,2*unit,3*unit,unit);
    ctx.fillRect(unit,3*unit,5*unit,3*unit);
    ctx.fillRect(2*unit,5*unit,3*unit,unit);

}