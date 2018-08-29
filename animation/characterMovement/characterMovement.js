var canvas;
var ctx;
var unit = 25;
var time= 0;
var isFacingRight = true;

// 1. New variable for animation
var requestId;

//2. Position of the animation
var positionX= 0;
var positionY= 0;

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
    
//8. Draw image in Canvas
//    if  (isFacingRight == true){
//     ctx.fillRect(positionX,0,50,50);
//    } else if (isFacingRight == false){
//        ctx.save();
//        ctx.scale(-1,1);
//        ctx.fillRect(positionX,0,50,50);
//        ctx.restore();
//    }
//    ctx.save();
//        ctx.scale(-1,1);
       ctx.fillRect(positionX,positionY,50,50);
//        ctx.restore();
    drawHouse();
    ctx.save();
    ctx.translate(positionX,30*unit+positionY);
    drawBob();
    ctx.restore();
    // ctx.save();
    // ctx.translate(15*unit,0);
    // ctx.scale(0.25,0.25);
    // drawStuart();
    // ctx.restore();
    
//9. Move Image
// Coming back to x=0 when it hits the border.
// if (positionX == canvas.width){
//     positionX = 0;
// } else {
//     positionX += 5;
//}
// changes is FacingRight if it hits the border
if (positionX == canvas.width - 120 ) {
    isFacingRight = false;
} else if (positionX == 0) {
    isFacingRight = true;
}
// changes the x coordinates based on isFacingRight
if (isFacingRight == true){
        positionX += 5;
       // Jump when facing right.
        if (positionX > canvas.width/4 && positionX < canvas.width/2 ) {
            positionY -= 1;
        } else if (positionX > canvas.width/2 && positionX < 3*canvas.width/4){
            positionY += 1;
        }
    } else if (isFacingRight == false){
        positionX -= 5;
    }
//jump when facing left
        if (positionX > canvas.width/4 && positionX < canvas.width/2){
//10. Cal this function again (Repeat from step 6)
    requestId = requestAnimationFrame(animationLoop);
        }
    }