var canvas;
var ctx;
var unit = 3;
var time= 0;
// 1. New variable for animation
var requestId;
var positionX = 2*unit;
var positionXG;
var positionY = 114*unit;
var positionYG;
//2. Position of the animation
var positionX= 0;
const spped = 3;
const timeLoop = 20 ;



window.onload = init; //when the window loads run the init function
 
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    //3. Run the startAnimation function
    startAnimation();

}
//4. Create startAnimation function
function startAnimation(){
    //5. Start the animation using animationisonLoop function
    requestId=requestAnimationFrame(animationLoop);
}
//6. create startAnimation function
function animationLoop(timeStamp){
    //7. Clears everything in canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBackground();
    // changeTime();
    ctx.save();
    ctx.translate(positionX,positionY);
    animateLuigi();
    ctx.restore();
    changePositionX();
    drawRuler(10);
    //1-. Cal this function again (Repeat from step 6)
    requestId = requestAnimationFrame(animationLoop);
}

function drawBackground() {
    ctx.fillStyle = "green" ;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(0,130*unit);
    drawGroundBlocks(11,5);
    ctx.restore();
}

function changeTime(){
    if (time <= timeLoop){
        time += 1;
    } else{
        time = 0;
    }
}

function changePositionX(){
    if (positionX > 165*unit) {
        positionX =0;
    }else {
        positionX += 1;
}

function animateLuigi(){
    ctx.save();
    ctx.translate(positionX,positionY);
    drawLuigi2();
    ctx.restore;
}

}
