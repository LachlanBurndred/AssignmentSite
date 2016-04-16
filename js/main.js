var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.arc(50, 50, 50, 0, Math.PI * 2);
context.fill();
context.closePath();