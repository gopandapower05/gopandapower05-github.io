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
    
    function drawLuigi1(x,y){
        ctx.fillStyle = "rgb(0,255,0)";//green
    ctx.fillRect(3*unit,0,6*unit,unit);
    ctx.fillRect(2*unit,unit,10*unit,unit);
    ctx.fillRect(2*unit,7*unit,8*unit,unit);
    ctx.fillRect(1*unit,8*unit,10*unit,unit);
    ctx.fillRect(0*unit,10*unit,12*unit,unit);
    ctx.fillRect(0*unit,9*unit,12*unit,unit);
    ctx.fillStyle = "rgb(255,195,0)";//skin colour
    ctx.fillRect(2*unit,2*unit,7*unit,unit);
    ctx.fillRect(2*unit,3*unit,9*unit,unit);
    ctx.fillRect(2*unit,4*unit,10*unit,unit);
    ctx.fillRect(3*unit,5*unit,7*unit,unit);
    ctx.fillRect(3*unit,6*unit,7*unit,unit);
    ctx.fillRect(0*unit,10*unit,2*unit,unit);
    ctx.fillRect(0*unit,11*unit,4*unit,unit);
    ctx.fillRect(0*unit,12*unit,2*unit,unit);
    ctx.fillRect(10*unit,10*unit,2*unit,2*unit);
    ctx.fillRect(8*unit,11*unit,4*unit,unit);
    ctx.fillRect(8*unit,12*unit,4*unit,unit);
    ctx.fillStyle = "rgb(75,33,0)";//brown
    ctx.fillRect(2*unit,2*unit,3*unit,unit);
    ctx.fillRect(3*unit,3*unit,unit,2*unit);
    ctx.fillRect(2*unit,5*unit,unit,unit);
    ctx.fillRect(1*unit,3*unit,unit,2*unit);
    ctx.fillRect(4*unit,4*unit,unit,unit);
    ctx.fillRect(1*unit,5*unit,unit,unit);
    ctx.fillStyle = "rgb(0,0,0)";//black
    ctx.fillRect(7*unit,2*unit,unit,2*unit);
    ctx.fillRect(8*unit,4*unit,unit,unit);
    ctx.fillRect(7*unit,5*unit,4*unit,unit);
    ctx.fillStyle = "rgb(70,0,255)";//blue
    ctx.fillRect(4*unit,7*unit,unit,3*unit);
    ctx.fillRect(7*unit,7*unit,unit,3*unit);
    ctx.fillRect(5*unit,9*unit,2*unit,unit);
    ctx.fillRect(3*unit,10*unit,6*unit,unit);
    ctx.fillRect(3*unit,11*unit,6*unit,unit);
    ctx.fillRect(2*unit,12*unit,8*unit,unit);
    ctx.fillRect(2*unit,13*unit,3*unit,unit);
    ctx.fillRect(7*unit,13*unit,3*unit,unit);
    ctx.fillStyle = "rgb(252,249,0)";//yellow
    ctx.fillRect(4*unit,10*unit,unit,unit);
    ctx.fillRect(7*unit,10*unit,unit,unit);
    ctx.fillStyle = "rgb(75,33,0)";// darker brown
    ctx.fillRect(1*unit,14*unit,3*unit,unit);
    ctx.fillRect(8*unit,14*unit,3*unit,unit);
    ctx.fillRect(0*unit,15*unit,4*unit,unit);
    ctx.fillRect(8*unit,15*unit,4*unit,unit);
    }
    function drawLuigi2(x,y){
        ctx.fillStyle = "rgb(0,255,0)";//green
        ctx.fillRect(2*unit,0*unit,6*unit,unit);
        ctx.fillRect(1*unit,1*unit,10*unit,unit);
        ctx.fillRect(1*unit,7*unit,6*unit,unit);
        ctx.fillRect(0*unit,8*unit,8*unit,unit);
        ctx.fillRect(0*unit,9*unit,9*unit,unit);
        ctx.fillRect(0*unit,10*unit,9*unit,unit);
        ctx.fillRect(0*unit,11*unit,9*unit,unit);
        ctx.fillRect(unit,12*unit,7*unit,unit);
    
        ctx.fillStyle = "rgb(255,195,0)"//skin
        ctx.fillRect(1*unit,2*unit,7*unit,unit);
        ctx.fillRect(1*unit,3*unit,9*unit,unit);
        ctx.fillRect(1*unit,4*unit,10*unit,unit);
        ctx.fillRect(2*unit,5*unit,7*unit,unit);
        ctx.fillRect(2*unit,6*unit,7*unit,unit);
        ctx.fillRect(3*unit,11*unit,3*unit,unit);
        ctx.fillRect(3*unit,12*unit,2*unit,unit);
    
        ctx.fillStyle = "rgb(0,0,0)";//black
        ctx.fillRect(6*unit,2*unit,unit,2*unit);
        ctx.fillRect(7*unit,4*unit,unit,unit);
        ctx.fillRect(6*unit,5*unit,4*unit,unit);
    
        ctx.fillStyle = "rgb(75,33,0)";//brown
        ctx.fillRect(1*unit,2*unit,3*unit,unit);
        ctx.fillRect(2*unit,3*unit,unit,2*unit);
        ctx.fillRect(1*unit,5*unit,unit,unit);
        ctx.fillRect(0*unit,3*unit,unit,2*unit);
        ctx.fillRect(3*unit,4*unit,unit,unit);
        ctx.fillRect(0*unit,5*unit,unit,unit);
        ctx.fillStyle = "rgb(70,0,255)";
        ctx.fillRect(3*unit,7*unit,unit,unit);
        ctx.fillRect(4*unit,8*unit,2*unit,unit);
        ctx.fillRect(3*unit,9*unit,5*unit,unit);
        ctx.fillRect(4*unit,10*unit,5*unit,2*unit);
        ctx.fillRect(6*unit,11*unit,3*unit,unit);
        ctx.fillRect(5*unit,12*unit,3*unit,unit);
        ctx.fillRect(2*unit,13*unit,3*unit,unit);
        ctx.fillRect(1*unit,12*unit,unit,unit);
        ctx.fillRect(0*unit,11*unit,unit,unit);
   
        ctx.fillStyle = "252,249,0)";
        ctx.fillRect(5*unit,9*unit,unit,unit);
        ctx.fillRect(8*unit,9*unit,unit,unit);
   
        ctx.fillStyle = "rgb(75,33,0)";
        ctx.fillRect(5*unit,13*unit,3*unit,unit);
        ctx.fillRect(2*unit,14*unit,7*unit,unit);
        ctx.fillRect(2*unit,15*unit,4*unit,unit);
    }
    function drawLuigi3(x,y){
        ctx.fillStyle = "rgb(0,255,0)";//green
        ctx.fillRect(5*unit,0*unit,6*unit,unit);
        ctx.fillRect(4*unit,1*unit,10*unit,unit);
        ctx.fillRect(2*unit,7*unit,8*unit,unit);
        ctx.fillRect(2*unit,8*unit,10*unit,unit);
        ctx.fillRect(4*unit,9*unit,10*unit,unit);
   
        ctx.fillStyle = "rgb(255,195,0)";//skin
        ctx.fillRect(4*unit,2*unit,7*unit,unit);
        ctx.fillRect(4*unit,3*unit,9*unit,unit);
        ctx.fillRect(4*unit,4*unit,10*unit,unit);
        ctx.fillRect(5*unit,5*unit,7*unit,unit);
        ctx.fillRect(5*unit,6*unit,7*unit,unit);
        ctx.fillRect(0*unit,8*unit,2*unit,unit);
        ctx.fillRect(0*unit,9*unit,3*unit,unit);
        ctx.fillRect(0*unit,10*unit,2*unit,unit);
        ctx.fillRect(12*unit,8*unit,3*unit,unit);
        ctx.fillRect(13*unit,9*unit,2*unit,unit);
    
        ctx.fillStyle = "rgb(0,0,0)";//black
        ctx.fillRect(9*unit,2*unit,unit,2*unit);
        ctx.fillRect(10*unit,4*unit,unit,unit);
        ctx.fillRect(9*unit,5*unit,4*unit,unit);

        ctx.fillStyle = "rgb(75,33,0)";//brwon
        ctx.fillRect(4*unit,2*unit,3*unit,unit);
        ctx.fillRect(5*unit,3*unit,unit,2*unit);
        ctx.fillRect(4*unit,5*unit,unit,unit);
        ctx.fillRect(3*unit,3*unit,unit,2*unit);
        ctx.fillRect(6*unit,4*unit,unit,unit);
        ctx.fillRect(3*unit,5*unit,unit,unit);

    ctx.fillStyle = "rgb(70,0,255)";//blue
        ctx.fillRect(6*unit,7*unit,2*unit,unit);
        ctx.fillRect(6*unit,8*unit,3*unit,unit);
        ctx.fillRect(6*unit,9*unit,5*unit,unit);
        ctx.fillRect(4*unit,10*unit,7*unit,unit);
        ctx.fillRect(3*unit,11*unit,9*unit,unit);
        ctx.fillRect(2*unit,12*unit,10*unit,unit);
        ctx.fillRect(3*unit,13*unit,3*unit,unit);
        ctx.fillRect(9*unit,13*unit,3*unit,unit);

        ctx.fillStyle = "rgb(252,249,0)";
        ctx.fillRect(7*unit,9*unit,unit,unit);
        
        ctx.fillStyle = "rgb(75,33,0)";//brown
        ctx.fillRect(1*unit,13*unit,2*unit,unit);
        ctx.fillRect(1*unit,14*unit,3*unit,unit);
        ctx.fillRect(2*unit,15*unit,3*unit,unit);
        ctx.fillRect(12*unit,11*unit,2*unit,unit);
        ctx.fillRect(13*unit,10*unit,unit,unit);
        ctx.fillRect(12*unit,12*unit,2*unit,unit);
        ctx.fillRect(12*unit,13*unit,2*unit,unit);

    }
}
