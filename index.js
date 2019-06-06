var canvas;
var ctx;
var unit = 5;
var requestId;
var positionX = 0;
var positionY = 0;
var transparency = 0.0;
var isPositive = true;
window.onload = init;
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // drawPanda(0,0,0.5);
     startAnimation();
    drawRuler(5);
}
function startAnimation() {
    requestId = requestAnimationFrame(animationLoop);
}
function animationLoop(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    changeDirection();
    changeTransparency();
    drawPanda(positionX,positionY,transparency);
    requestId = requestAnimationFrame(animationLoop);

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function changeTransparency() {
    if (isPositive == true) {
        transparency += 0.01;
    } else if (isPositive == false) {
        transparency -= 0.01;
    }
}
function changeDirection() {
    if (transparency >= 1.0) {
        isPositive = false;
    } else if (transparency <= 0.0) {
        isPositive = true;
        const xMax = canvas.width / unit - 35;
        const yMax = canvas.height / unit - 64;
        positionX = getRandomInt(0, xMax);
        positionY = getRandomInt(0, yMax);
    }
}