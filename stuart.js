var canvas; 
var ctx;
var unit = 5;
window.onload = init;
function yellow(){
    ctx.fillStyle = 'rgb(228,199,59)';
    ctx.fillRect(35*unit,9*unit,8*unit,2*unit);
    ctx.fillRect(33*unit,10*unit,11*unit,2*unit);
    ctx.fillRect(31*unit,11*unit,16*unit,2*unit);
    ctx.fillRect(29*unit,12*unit,19*unit,2*unit);
    ctx.fillRect(28*unit,13*unit,22*unit,2*unit);
    ctx.fillRect(27*unit,14*unit,24*unit,2*unit);
    ctx.fillRect(26*unit,15*unit,26*unit,2*unit);
    ctx.fillRect(25*unit,16*unit,28*unit,2*unit);
    ctx.fillRect(24*unit,17*unit,30*unit,4*unit);
    ctx.fillRect(23*unit,18*unit,32*unit,4*unit);
    ctx.fillRect(22*unit,19*unit,33*unit,39*unit);
}
function blue(){
    ctx.fillStyle = 'rgb(44,58,103)';
    ctx.fillRect(20*unit,40*unit,37*unit,19*unit);
    ctx.fillRect(20*unit,40*unit,37*unit,5*unit);
    ctx.fillRect(24*unit,58*unit,30*unit,2*unit);
    ctx.fillRect(26*unit,60*unit,27*unit,2*unit);
    ctx.fillRect(27*unit,62*unit,25*unit,4*unit);

}
function black(){
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(35*unit,7*unit,4*unit,2*unit);
    ctx.fillRect(39*unit,7*unit,4*unit,2*unit);
    ctx.fillRect(33*unit,8*unit,2*unit,2*unit);
    ctx.fillRect(31*unit,9*unit,2*unit,2*unit);
    ctx.fillRect(29*unit,10*unit,2*unit,2*unit);
    ctx.fillRect(28*unit,11*unit,unit,2*unit);
    ctx.fillRect(27*unit,12*unit,unit,2*unit);
    ctx.fillRect(26*unit,13*unit,unit,2*unit);
    ctx.fillRect(25*unit,14*unit,unit,2*unit);
    ctx.fillRect(24*unit,15*unit,unit,2*unit);
    ctx.fillRect(23*unit,16*unit,unit,2*unit);
    ctx.fillRect(22*unit,17*unit,unit,2*unit);
    ctx.fillRect(20*unit,18*unit,37*unit,6*unit);
    ctx.fillRect(43*unit,8*unit,unit,2*unit);
    ctx.fillRect(44*unit,9*unit,3*unit,2*unit);
    ctx.fillRect(47*unit,10*unit,unit,2*unit);
    ctx.fillRect(48*unit,11*unit,2*unit,2*unit);
    ctx.fillRect(49*unit,12*unit,unit,unit);
    ctx.fillRect(50*unit,12*unit,unit,2*unit);
    ctx.fillRect(51*unit,13*unit,unit,2*unit);
    ctx.fillRect(52*unit,14*unit,unit,2*unit);
    ctx.fillRect(53*unit,15*unit,unit,2*unit);
    ctx.fillRect(54*unit,16*unit,unit,2*unit);
    ctx.fillRect(20*unit,22*unit,2*unit,2*unit);
    ctx.fillRect(21*unit,23*unit,unit,17*unit);
    ctx.fillRect(20*unit,39*unit,2*unit,unit);
    ctx.fillRect(19*unit,39*unit,unit,20*unit);
    ctx.fillRect(19*unit,59*unit,7*unit,unit)
    ctx.fillRect(25*unit,60*unit,unit,unit);
    ctx.fillRect(25*unit,61*unit,unit,unit);
    ctx.fillRect(25*unit,62*unit,2*unit,unit);
    ctx.fillRect(26*unit,63*unit,unit,3*unit);
    ctx.fillRect(29*unit,66*unit,8*unit,2*unit);
    ctx.fillRect(40*unit,66*unit,8*unit,2*unit);
    ctx.fillRect(52*unit,63*unit,unit,3*unit);
    ctx.fillRect(52*unit,62*unit,2*unit,unit);
    ctx.fillRect(53*unit,61*unit,unit,2*unit);
    ctx.fillRect(53*unit,60*unit,2*unit,unit);
    ctx.fillRect(54*unit,59*unit,unit,unit);
    ctx.fillRect(55*unit,58*unit,2*unit,unit);
    ctx.fillRect(55*unit,23*unit,unit,17*unit);
    ctx.fillRect(55*unit,39*unit,3*unit,unit);
    ctx.fillRect(57*unit,39*unit,unit,20*unit);
    ctx.fillRect(28*unit,45*unit,21*unit,2*unit);
    ctx.fillRect(28*unit,46*unit,2*unit,4*unit);
    ctx.fillRect(30*unit,50*unit,2*unit,2*unit);
    ctx.fillRect(32*unit,52*unit,13*unit,2*unit);
    ctx.fillRect(45*unit,50*unit,2*unit,2*unit);
    ctx.fillRect(47*unit,47*unit,2*unit,3*unit);
    ctx.fillRect(33*unit,34*unit,9*unit,2*unit);
   
}
function brown(){
    ctx.fillStyle = 'rgb(76,44,23)';
    ctx.fillRect(33*unit,16*unit,9*unit,9*unit);
}
function white(){
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(33*unit,15*unit,11*unit,2*unit);
    ctx.fillRect(31*unit,16*unit,14*unit,10*unit);
    ctx.fillRect(33*unit,25*unit,10*unit,2*unit);
}
function grey(){
    ctx.fillStyle = 'rgb(129,123,133)';
    ctx.fillRect(33*unit,13*unit,11*unit,2*unit);
    ctx.fillRect(31*unit,14*unit,2*unit,2*unit);
    ctx.fillRect(29*unit,15*unit,2*unit,12*unit);
    ctx.fillRect(31*unit,26*unit,2*unit,2*unit);
    ctx.fillRect(32*unit,27*unit,11*unit,2*unit);
    ctx.fillRect(43*unit,26*unit,2*unit,2*unit);
    ctx.fillRect(45*unit,15*unit,2*unit,12*unit);
    ctx.fillRect(44*unit,14*unit,2*unit,2*unit);
    ctx.fillRect(35*unit,27*unit,2*unit,2*unit);
}

function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    yellow();
    blue();
    black();
    grey();
    white();
    brown();

}