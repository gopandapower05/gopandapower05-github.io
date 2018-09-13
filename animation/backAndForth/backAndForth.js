var canvas;
var ctx;
const unit = 10;
// 1. New variable for animation
var requestId;

//2. Position of the animation
var positionX= 0;
var isFacingRight = true;
const luigiWidth = 10*unit;
const speed = 4;

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
    drawCharacter();
    changeFacingDirection();
    changePositionX();
    //1-. Cal this function again (Repeat from step 6)
    requestId = requestAnimationFrame(animationLoop);
}

// draw the character depending on which direction its facing
function drawCharacter(){
    if (isFacingRight == true) {
        ctx.save();
        // ctx.scale(0.2,0.2);
        ctx.translate(0*unit,23*unit);
        ctx.translate(positionX,0*unit);
        drawLuigi1();
        ctx.restore();
    }else if (isFacingRight == false){
        ctx.save();
        ctx.translate(0,23*unit);
        ctx.translate(luigiWidth,0);
        ctx.translate(positionX,0*unit);
        ctx.scale(-1,1);
        drawLuigi1();
        ctx.restore();
    }
}
//change the facing direction depending on hwere the character is
function changeFacingDirection(){
    if (positionX == canvas.width - luigiWidth){
        isFacingRight = false;
    }else if (positionX == 0){
        isFacingRight = true;
    }

}
// change the x position depending on which direction the character is facing
function changePositionX(){
    if (isFacingRight){
        positionX += speed; 
    }else if (isFacingRight == false){
        positionX -= speed;
    }
}