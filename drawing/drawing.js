var canvas; 
var ctx;
var unit = 5;
window.onload = init; // When the window loads, run the init function
function star() {
    ctx.beginPath();
    ctx.moveTo(13*unit,2*unit); //the destinaton position of the line.
    ctx.lineTo(17*unit,9*unit);
    ctx.lineTo(25*unit,10*unit);
    ctx.lineTo(17*unit,14*unit);
    ctx.lineTo(20*unit,22*unit);
    ctx.lineTo(12*unit,15*unit);
    ctx.lineTo(7*unit,23*unit);
    ctx.lineTo(8*unit,14*unit);
    ctx.lineTo(2*unit,12*unit);
    ctx.lineTo(9*unit,10*unit);
    ctx.lineTo(13*unit,2*unit);
    ctx.stroke();
}
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    //  // ctx.font= [font-style] [font-weight][font-size][font-family]
    // ctx.beginPath(); //code that comes before drawing a line.
    // ctx.strokeStyle = "red";
    // ctx.fillStyle = "red";
    // ctx.stroke(); //stroking the line
    // star();
    
    // ctx.fillStyle = "white";
    // ctx.save();
    // ctx.translate(5*unit,5*unit);
    // ctx.fillRect(0,0,unit,unit);
    // ctx.restore();
    // drawGroundBlock();
    drawGroundBlocks(7,2);

}