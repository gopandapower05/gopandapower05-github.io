var positionX = 0;
var positionY = 12*unit;
var isJumping = true;
const timeLoop = 15;
const speed = 2;
const jumpSpeed = 7;
const jumpPosition = 2*unit;
const brickPosition = 4*unit;
const fallPosition = 13*unit;
const landPosition = 15*unit;

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
    drawBackground3();
    walkingAnimation();
    changePositionX();
    changePositionY();
    changeTime();
    changeJump();
    drawRuler(1);
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
    if (isJumping == false){
        if ((0<=time)&&(time<= timeLoop/2)){
            drawLuigi2();
        }else if ((timeLoop/2<= time)&&(time<=timeLoop)){
            drawLuigi3();
        }
    }else if (isJumping == true){
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

function changePositionY(){
    if ((jumpPosition <= positionX) && (positionX < brickPosition)){
        positionY -= jumpSpeed;
    }else if ((fallPosition < positionX) && (positionX <= landPosition)){
        positionY += jumpSpeed;
    }
    
}

function changeJump(){
    if ((jumpPosition <= positionX) && (positionX <brickPosition)){
        isJumping = true;
    }else if ((fallPosition < positionX) && (positionX <= landPosition)) {
        isJumping = true;
    }else {
        isJumping = false;
    }
}

function drawBackground3(){
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(6*unit,10*unit);
    ctx.scale(0.1,0.1);
    drawBrickBlocks(5,1);
    ctx.restore();
    ctx.save();
    ctx.translate(0,17*unit);
    ctx.scale(0.1,0.1);
    drawGroundBlocks(15,2);
    ctx.restore();
}

