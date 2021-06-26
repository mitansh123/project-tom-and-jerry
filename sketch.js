var Bg,cat1,cat2,cat3,cat4,mouse1,mouse2,mouse3,mouse4,tom,jerry;





function preload() {
    //load the images here
cat1 = loadImage("images/cat1.png")
cat2 = loadImage("images/cat2.png,cat3.png")


mouse1 = loadImage("images/mouse1.png")
mouse2 = loadImage("images/mouse2.png,mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600)
tom.addAnimation(cat1);
tom.scale = 0.2;

jerry = createSprite(870,600)
jerry.addAnimation(mouse1);
jerry.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if (tom.x = jerry.x<(tom.width - jerry.width)/2){
    tom.velocityX = 0

}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if  (keycode === LEFT_ARROW){
    mouse1.addAnimation("mouseteasing",mouse2)
    mouse1.changeAnimation("mouseteasing")
    mouse1.frameDelay = 25;
}

}
