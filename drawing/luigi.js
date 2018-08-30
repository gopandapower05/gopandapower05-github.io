var canvas;
var ctx;
var unit = 10;
window.onload = init;
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    drawLuigi1();
    
    


        ctx.fillStyle = "rgb(0,255,0)";
        ctx.fillRect(25*unit,2*unit,6*unit,unit);
        ctx.fillRect(24*unit,3*unit,10*unit,unit);
        ctx.fillRect(24*unit,9*unit,6*unit,unit);
        ctx.fillRect(23*unit,10*unit,8*unit,unit);
        ctx.fillRect(23*unit,11*unit,9*unit,unit);
        ctx.fillRect(23*unit,12*unit,9*unit,unit);
        ctx.fillRect(23*unit,13*unit,9*unit,unit);
        ctx.fillRect(24*unit,14*unit,7*unit,unit);
    
        ctx.fillStyle = "rgb(255,195,0)"
        ctx.fillRect(24*unit,4*unit,7*unit,unit);
        ctx.fillRect(24*unit,5*unit,9*unit,unit);
        ctx.fillRect(24*unit,6*unit,10*unit,unit);
        ctx.fillRect(25*unit,7*unit,7*unit,unit);
        ctx.fillRect(25*unit,8*unit,7*unit,unit);
        ctx.fillRect(26*unit,13*unit,3*unit,unit);
        ctx.fillRect(26*unit,14*unit,2*unit,unit);
    
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(29*unit,4*unit,unit,2*unit);
        ctx.fillRect(30*unit,6*unit,unit,unit);
        ctx.fillRect(29*unit,7*unit,4*unit,unit);
    
        ctx.fillStyle = "rgb(75,33,0)";
        ctx.fillRect(24*unit,4*unit,3*unit,unit);
        ctx.fillRect(25*unit,5*unit,unit,2*unit);
        ctx.fillRect(24*unit,7*unit,unit,unit);
        ctx.fillRect(23*unit,5*unit,unit,2*unit);
        ctx.fillRect(26*unit,6*unit,unit,unit);
        ctx.fillRect(23*unit, 7*unit,unit,unit);
    
        ctx.fillStyle = "rgb(70,0,255)";
        ctx.fillRect(26*unit,9*unit,unit,unit);
        ctx.fillRect(27*unit,10*unit,2*unit,unit);
        ctx.fillRect(26*unit,11*unit,5*unit,unit);
        ctx.fillRect(27*unit,12*unit,5*unit,2*unit);
        ctx.fillRect(29*unit,13*unit,3*unit,unit);
        ctx.fillRect(28*unit,14*unit,3*unit,unit);
        ctx.fillRect(25*unit,15*unit,3*unit,unit);
        ctx.fillRect(24*unit,14*unit,unit,unit);
        ctx.fillRect(23*unit,13*unit,unit,unit);
   
        ctx.fillStyle = "252,249,0)";
        ctx.fillRect(28*unit,11*unit,unit,unit);
        ctx.fillRect(31*unit,11*unit,unit,unit);
   
        ctx.fillStyle = "rgb(75,33,0)";
        ctx.fillRect(28*unit,15*unit,3*unit,unit);
        ctx.fillRect(25*unit,16*unit,7*unit,unit);
        ctx.fillRect(25*unit,17*unit,4*unit,unit);
    
        ctx.fillStyle = "rgb(0,255,0)";
        ctx.fillRect(45*unit,2*unit,6*unit,unit);
        ctx.fillRect(44*unit,3*unit,10*unit,unit);
        ctx.fillRect(42*unit,9*unit,8*unit,unit);
        ctx.fillRect(42*unit,10*unit,10*unit,unit);
        ctx.fillRect(44*unit,11*unit,10*unit,unit);
   
        ctx.fillStyle = "rgb(255,195,0)";
        ctx.fillRect(44*unit,4*unit,7*unit,unit);
        ctx.fillRect(44*unit,5*unit,9*unit,unit);
        ctx.fillRect(44*unit,6*unit,10*unit,unit);
        ctx.fillRect(45*unit,7*unit,7*unit,unit);
        ctx.fillRect(45*unit,8*unit,7*unit,unit);
        ctx.fillRect(40*unit,10*unit,2*unit,unit);
        ctx.fillRect(40*unit,11*unit,3*unit,unit);
        ctx.fillRect(40*unit,12*unit,2*unit,unit);
        ctx.fillRect(52*unit,10*unit,3*unit,unit);
        ctx.fillRect(53*unit,11*unit,2*unit,unit);
    
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(49*unit,4*unit,unit,2*unit);
        ctx.fillRect(50*unit,6*unit,unit,unit);
        ctx.fillRect(49*unit,7*unit,4*unit,unit);

        ctx.fillStyle = "rgb(75,33,0)";
        ctx.fillRect(44*unit,4*unit,3*unit,unit);
        ctx.fillRect(45*unit,5*unit,unit,2*unit);
        ctx.fillRect(44*unit,7*unit,unit,unit);
        ctx.fillRect(43*unit,5*unit,unit,2*unit);
        ctx.fillRect(46*unit,6*unit,unit,unit);
        ctx.fillRect(43*unit,7*unit,unit,unit);

        ctx.fillStyle = "rgb(70,0,255)";
        ctx.fillRect(46*unit,9*unit,2*unit,unit);
        ctx.fillRect(46*unit,10*unit,3*unit,unit);
        ctx.fillRect(46*unit,11*unit,5*unit,unit);
        ctx.fillRect(44*unit,12*unit,7*unit,unit);
        ctx.fillRect(42*unit,14*unit,10*unit,unit);
        ctx.fillRect(43*unit,15*unit,3*unit,unit);
        ctx.fillRect(49*unit,15*unit,3*unit,unit);
        ctx.fillRect(43*unit,13*unit,8*unit,unit);

        ctx.fillStyle = "rgb(252,249,0)";
        ctx.fillRect(47*unit,11*unit,unit,unit);
        ctx.fillStyle = "rgb(75,33,0)";
        ctx.fillRect(41*unit,15*unit,2*unit,unit);
        ctx.fillRect(41*unit,16*unit,3*unit,unit);
        ctx.fillRect(42*unit,17*unit,3*unit,unit);
        ctx.fillRect(52*unit,13*unit,2*unit,unit);
        ctx.fillRect(53*unit,12*unit,unit,unit);
        ctx.fillRect(52*unit,14*unit,2*unit,unit);
        ctx.fillRect(52*unit,15*unit,2*unit,unit);
   
}
