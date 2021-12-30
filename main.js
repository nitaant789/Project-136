objects = [];
status = "";

function preload() {
 
}
function setup() {
 canvas = createCanvas(480,380);
 canvas.center();
 video = createCapture(VIDEO);
video.hide();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";
}
function draw() {
 image(video, 0, 0, 480, 380);
}
function modelLoaded()
{
    console.log("model is loaded");
    status = true;
    
}
function play() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "status : detecting objects";
   }