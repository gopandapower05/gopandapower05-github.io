function drawCharacter(x,y){
    ctx.save();
    ctx.translate(x*unit,y*unit);
    ctx.restore();
    ctx.fillStyle = "rgb(250,250,250)"
    ctx.fillRect(0,0,100,100);
}

function head(){
    ctx.fillStyle = "rgb"
}