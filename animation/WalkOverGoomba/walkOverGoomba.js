var canvas;
var ctx;
var unit = 3;
var time= 0;
// 1. New variable for animation
var requestId;
var positionX;
var positionXG;
var positionY;
var positionYG 
//2. Position of the animation
var positionX= 0;
const spped = 3;
const timeLoop = 20;



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
    ;
    drawBackground();
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
    if (time <= timeloop){
        time += 1;
    } else{
        time = 0;
    }
}

function changePositionX(){
    
}