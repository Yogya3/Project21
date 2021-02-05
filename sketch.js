var canvas;
var music;
var b1,b2,b3,b4
var box
var edges
function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    edges=createEdgeSprites();


    b1=createSprite(100,windowHeight-50,160,20)
    b1.shapeColor="blue";
    b2=createSprite(400,windowHeight-50,160,20)
    b2.shapeColor="green";
    b3=createSprite(700,windowHeight-50,160,20)
    b3.shapeColor="pink";
    b4=createSprite(1000,windowHeight-50,160,20)
    b4.shapeColor="red";

    box=createSprite(windowWidth/2,windowHeight/2,20,20)
    box.shapeColor="yellow";

    box.velocityX=-6;
    box.velocityY=7;

}

function draw() {
    background(0);

    music.play();

    box.bounceOff(edges);

if (isTouching(box,b1) && box.bounceOff(b1) ){

    box.shapeColor="blue";

}
if (isTouching(box,b2) && box.bounceOff(b2) ){

    box.shapeColor="green";

}
if (isTouching(box,b3) && box.bounceOff(b3) ){

    box.shapeColor="pink";

}
if (isTouching(box,b4) ){

    box.velocityX=0 ;

    box.velocityY=0;
    music.stop();

}



    drawSprites();

    
}
