var canvas;
var ctx;
var unit = 25;
var time= 0;
// 1. New variable for animation
var requestId;

//2. Position of the animation
var positionX= 0;

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
    ctx.fillRect(positionX,0,50,50);
    //9. Move Image
    positionX += 1;
    //1-. Cal this function again (Repeat from step 6)
    requestId = requestAnimationFrame(animationLoop);
}