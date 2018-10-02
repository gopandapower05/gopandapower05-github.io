var canvas;
var ctx;
var requestId;
var unit = 25;
var time= 0;
// 1. New variable for animation
//2. Position of the animation
var positionX = 0;
var positionY = 12*unit;
var isJumping = true;
const timeLoop = 30;
const speed = 3;
const jumpSpeed = 3;

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
    walkingAnimation();
    changePositionX();
    changePositionY();
    changeTime();
    // changeJump();


    positionX += 1;
    //1-. Cal this function again (Repeat from step 6)
    requestId = requestAnimationFrame(animationLoop);

    // 9. Move Image
}
// draw the character picture 2 and three

function changeTime(){
    if (time == timeLoop){
        time = 0;
    }else{
        time+=1;
    }
}
function walkingAnimation(){
    ctx.save();
    ctx.translate(positionX,positionY);
    ctx.scale(0.3,0.3);
    if (isJumping == true){
        if ((0<=time)&&(time<=15)){
            drawLuigi2();
        }else if ((15<= time)&&(time<=30)){
            drawLuigi3();
        }
    }else if (isJumping == false){
        drawLuigi3();
    }
    ctx.restore();
}
//akes the character to move foward 
function changePositionX(){
    
    if (positionX < canvas.width){
        positionX += speed;
    }else{
        positionX = -10*unit;
    }
}
function drawBackground(){
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(0,17*unit);
    ctx.scale(0.1,0.1);
    drawGroundBlocks(15,2);
    ctx.restore();
}
function changePositionY(){
    const jumpPosition = canvas.width/4;
    const peakPosition = canvas.width/2;
    const landPosition = canvas.width*3/4;
    if ((jumpPosition <= positionX) && (positionX < peakPosition)){
        positionY -= jumpSpeed;
    }else if ((peakPosition <= positionX) && (positionX < landPosition)){
        positionY += jumpSpeed;
    }
    
}

function changeJump(){
    if ((jumpPosition > positionX) && (landPosition > positionX)){
        isJumping = true;
    }else {
        isJumping = false;
    }
}