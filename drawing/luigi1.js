function drawLuigi1(){
    head();
    bottom();
}
function head(){
    ctx.fillStyle = "rgb(0,255,0)";//green
    ctx.fillRect(2*unit,0,6*unit,unit);
    ctx.fillRect(unit,unit,10*unit,unit);
    ctx.fillRect(5*unit,9*unit,8*unit,unit);
    ctx.fillRect(4*unit,10*unit,10*unit,unit);
    ctx.fillRect(2*unit,12*unit,12*unit,unit);
    ctx.fillRect(2*unit,11*unit,12*unit,unit);
    ctx.fillStyle = "rgb(255,195,0)";//skin colour
    ctx.fillRect(unit,2*unit,7*unit,unit);
    ctx.fillRect(2*unit,3*unit,9*unit,unit);
    ctx.fillRect(2*unit,4*unit,10*unit,unit);
    ctx.fillRect(5*unit,7*unit,7*unit,unit);
    ctx.fillRect(5*unit,8*unit,7*unit,unit);
    ctx.fillRect(2*unit,12*unit,2*unit,unit);
    ctx.fillRect(2*unit,13*unit,4*unit,unit);
    ctx.fillRect(2*unit,14*unit,2*unit,unit);
    ctx.fillRect(12*unit,12*unit,2*unit,2*unit);
    ctx.fillRect(10*unit,13*unit,4*unit,unit);
    ctx.fillRect(10*unit,14*unit,4*unit,unit);
    ctx.fillStyle = "rgb(75,33,0)";//brown
    ctx.fillRect(unit,2*unit,3*unit,unit);
    ctx.fillRect(0,3*unit,unit,2*unit);
    ctx.fillRect(0,5*unit,unit,unit);
    ctx.fillRect(2*unit,3*unit,unit,2*unit);
    ctx.fillRect(3*unit,4*unit,unit,unit);
    ctx.fillRect(3*unit,7*unit,unit,unit);
}

function bottom(){
    ctx.fillStyle = "rgb(0,0,0)";//black
    ctx.fillRect(9*unit,4*unit,unit,2*unit);
    ctx.fillRect(10*unit,6*unit,unit,unit);
    ctx.fillRect(9*unit,7*unit,4*unit,unit);
    ctx.fillStyle = "rgb(70,0,255)";//blue
    ctx.fillRect(6*unit,9*unit,unit,3*unit);
    ctx.fillRect(9*unit,9*unit,unit,3*unit);
    ctx.fillRect(7*unit,11*unit,2*unit,unit);
    ctx.fillRect(5*unit,12*unit,6*unit,unit);
    ctx.fillRect(5*unit,13*unit,6*unit,unit);
    ctx.fillRect(4*unit,14*unit,8*unit,unit);
    ctx.fillRect(4*unit,15*unit,3*unit,unit);
    ctx.fillRect(9*unit,15*unit,3*unit,unit);
    ctx.fillStyle = "rgb(252,249,0)";//yellow
    ctx.fillRect(6*unit,12*unit,unit,unit);
    ctx.fillRect(9*unit,12*unit,unit,unit);
    ctx.fillStyle = "rgb(75,33,0)";// darker brown
    ctx.fillRect(3*unit,16*unit,3*unit,unit);
    ctx.fillRect(10*unit,16*unit,3*unit,unit);
    ctx.fillRect(2*unit,17*unit,4*unit,unit);
    ctx.fillRect(10*unit,17*unit,4*unit,unit);
}