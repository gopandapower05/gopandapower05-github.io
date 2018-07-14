var canvas; 
var ctx;
var unit = 25;
window.onload = init; // When the window loads, run the init function
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = 'blue'; // Setting the colour of filling
    ctx.fillRect(0,0,100,100); // Drawing a rectangle or square
    ctx.fillRect(100,100,100,100);
    ctx.fillRect(200,200,100,100);
    ctx.fillRect(300,300,100,100);
    ctx.fillRect(400,400,100,100);
    ctx.fillRect(400,0,100,100);
    ctx.fillRect(300,100,100,100);
    ctx.fillRect(100,300,100,100);
    ctx.fillRect(0,400,100,100);
}