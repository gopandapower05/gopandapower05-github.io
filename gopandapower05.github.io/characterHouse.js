var canvas; 
var ctx;
var unit = 10;
window.onload = init;
function roof(){
    ctx.beginPath();
    ctx.fillStyle = 'rgb(120,74,50)';
    ctx.moveTo(2*unit,18*unit);
    ctx.lineTo(23*unit,3*unit);
    ctx.lineTo(42*unit,18*unit);
    ctx.fill();
 }

function windows(){
    ctx.fillStyle = 'rgb(181,228,240)';
    ctx.fillRect(4*unit,22*unit, 10*unit,10*unit);
    ctx.fillRect(30*unit,22*unit,10*unit,10*unit);
    ctx.beginPath();
    ctx.fillStyle = 'rgb(180,225,237)';
    ctx.moveTo(9*unit,22*unit);
    ctx.lineTo(9*unit,32*unit);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = 'rgb(205,252,252)';
    ctx.moveTo(4*unit,27*unit);
    ctx.lineTo(14*unit,27*unit);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.moveTo(35*unit,22*unit);
    ctx.lineTo(35*unit,32*unit);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.moveTo(30*unit,27*unit);
    ctx.lineTo(40*unit,27*unit);
    ctx.stroke();
}

function door(){
    ctx.fillStyle = 'rgb(120,74,50)';
    ctx.fillRect(17*unit,30*unit,10*unit,15*unit);
    ctx.fillRect(34*unit,3*unit,8*unit,15*unit);
    ctx.fillStyle = 'rgb(100,60,40)';
    ctx.fillRect(18*unit,32*unit,8*unit,13*unit);
    ctx.fillStyle = 'rgb(70,30,20)';
    ctx.fillRect(18.5*unit,38*unit,unit,unit);
}

function cloud(){
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(2*unit,8*unit,5*unit,5*unit);
    ctx.fillRect(5*unit,8*unit,4*unit,5*unit);
    ctx.fillRect(5*unit,5*unit,5*unit,8*unit);
}
function background(){
    ctx.fillStyle = 'rgb(62,197,255)';
    ctx.fillRect(0,0,201*unit,50*unit);
    ctx.fillStyle = 'rgb(80,222,122)';
    ctx.fillRect(0,300,201*unit,201*unit);
}
function houseer(){
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(17*unit,18*unit,9*unit,27*unit);
    ctx.fillRect(25*unit,18*unit,17*unit,27*unit);
    ctx.fillRect(2*unit,18*unit,17*unit,27*unit);
}
function house(){
    background();
    cloud();
    houseer();
    roof();
    door();
    windows();
}

function character(){
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
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    house();
    ctx.save();
    ctx.translate(17*unit,38*unit);
    ctx.scale(0.5,0.5);
    character();
    ctx.restore();

    ctx.save();
    ctx.translate(5*unit,7*unit);
    ctx.scale(1,0.5);
    character();
    ctx.restore();

    ctx.save();
    ctx.translate(30*unit,0*unit);
    ctx.scale(0.5,1);
    character();
    ctx.restore();
}