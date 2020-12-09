var square = document.getElementById("square");
var originalColor = window.getComputedStyle(square).backgroundColor;
console.log(originalColor);
console.log("hello");
function hoverColor(color) {
    square.style.backgroundColor = color;
}

function defaultColor() {
    square.style.backgroundColor = originalColor;
}

function leftClickColor(color) {
    square.style.backgroundColor = color;
}

function upClickColor(color) {
    square.style.backgroundColor = color;
}

function doubleColor(color) {
    square.style.backgroundColor = color;
}

function scrollColor(color) {
    square.style.backgroundColor = color;
}

function defaultColor(color) {
    square.style.backgroundColor = originalColor;
}