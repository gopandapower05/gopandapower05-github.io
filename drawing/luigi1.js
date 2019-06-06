function drawLuigi1(x,y){
    ctx.save();
    ctx.translate(x*unit,y*unit);
    head();
    bottom();
    ctx.restore();
}
function head(){
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
}

function bottom(){
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