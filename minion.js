var canvas;
var ctx;
var unit = 25;
window.onload = init; // When the window loads, run the init function
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgb(250,193,0)'; // Setting the colour of filling
    ctx.fillRect(2*unit,1,9*unit,unit);
    ctx.fillRect(unit,unit,11*unit,unit );
    ctx.fillRect(0,2*unit,13*unit,11*unit);
    ctx.fillStyle = 'rgb(135,135,135)';
    ctx.fillRect(2*unit,2*unit,3*unit,unit);
    ctx.fillRect(5*unit,3*unit,unit,unit);
    ctx.fillRect(6*unit,4*unit,unit,3*unit);
    ctx.fillRect(unit,3*unit,unit,unit);
    ctx.fillRect(0,4*unit,unit,3*unit);
    ctx.fillRect(unit,7*unit,unit,unit);
    ctx.fillRect(2*unit,8*unit,3*unit,unit);
    ctx.fillRect(5*unit,7*unit,unit,unit);
    ctx.fillRect(7*unit,7*unit,unit,unit);
    ctx.fillRect(8*unit,8*unit,3*unit,unit);
    ctx.fillRect(11*unit,7*unit,unit,unit);
    ctx.fillRect(12*unit,4*unit,unit,3*unit);
    ctx.fillRect(11*unit,3*unit,unit,unit);
    ctx.fillRect(8*unit,2*unit,3*unit,unit);
    ctx.fillRect(7*unit,3*unit,unit,unit);
    ctx.fillStyle = 'rgb(254,255,253)';
    ctx.fillRect(2*unit,3*unit,3*unit,unit);
    ctx.fillRect(unit,4*unit,5*unit,3*unit);
    ctx.fillRect(2*unit,7*unit,3*unit,unit);
    ctx.fillRect(8*unit,7*unit,3*unit,unit);
    ctx.fillRect(7*unit,4*unit,5*unit,3*unit);
    ctx.fillRect(8*unit,3*unit,3*unit,unit);
    ctx.fillStyle = 'rgb(65,41,5)';
    ctx.fillRect(3*unit,5*unit,2*unit,2*unit);
    ctx.fillRect(8*unit,5*unit,2*unit,2*unit);
    ctx.fillStyle = 'rgb(7,2,0)';
    ctx.fillRect(5*unit,9*unit,3*unit,unit);
    ctx.fillRect(unit,11*unit,unit,unit);
    ctx.fillRect(11*unit,11*unit,unit,unit);
    ctx.fillRect(0,13*unit,unit,2*unit)
    ctx.fillRect(12*unit,13*unit,unit,2*unit);
    ctx.fillRect(4*unit,12*unit,5*unit,unit);
    ctx.fillRect(4*unit,13*unit,unit,unit);
    ctx.fillRect(8*unit,13*unit,unit,unit);
    ctx.fillRect(5*unit,14*unit,3*unit,unit);
    ctx.fillRect(3*unit,17*unit,3*unit,unit);
    ctx.fillRect(7*unit,17*unit,3*unit,unit);
    ctx.fillRect(10*unit,13*unit,3*unit,unit)
    ctx.fillStyle = 'rgb(5,59,119)';
    ctx.fillRect(0,10*unit,unit,unit);
    ctx.fillRect(2*unit,11*unit,9*unit,unit);
    ctx.fillRect(12*unit,10*unit,unit,unit);
    ctx.fillRect(unit,13*unit,3*unit,unit);
    ctx.fillRect(2*unit,16*unit,9*unit,unit);
    ctx.fillRect(unit,12*unit,3*unit,unit);
    ctx.fillRect(9*unit,11*unit,3*unit,2*unit);
    ctx.fillRect(unit,14*unit,4*unit,2*unit);
    ctx.fillRect(5*unit,15*unit,3*unit,unit);
    ctx.fillRect(8*unit,14*unit,4*unit,2*unit);
    ctx.fillRect(5*unit,13*unit,3*unit,unit);
    ctx.fillRect(9*unit,13*unit,unit,unit);
    


}