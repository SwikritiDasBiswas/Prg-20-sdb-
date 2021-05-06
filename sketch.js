
var bgImg;
var cat , mouse;
var catImg1, catImg2 ,catImg3, mouseImg1 , mouseImg2 , mouseImg3 ;

    function preload(){
    catImg1 = loadImage("cat1.png");
    mouseImg1 = loadImage("mouse1.png")
    bgImg = loadImage("garden.png")
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg3 = loadImage("mouse4.png");
}

    function setup(){
    createCanvas(1000,800);
    cat = createSprite(900,700);
    cat.addImage("crookshanks",catImg1)
    cat.scale = 0.13;

    mouse = createSprite(100,700);
    mouse.addImage("scabbers",mouseImg1);
    mouse.scale = 0.1;
}
    function draw(){
         background(bgImg);
         if(cat.x - mouse.x<(cat.width - mouse.width)/2 + 50 ){
         cat.velocityX = 0;
         cat.addImage("catWalking",catImg3);
         cat.x = mouse.x + 100;

         mouse.addImage("mouseTeasing",mouseImg3);
}
            
    drawSprites();
}

    function keyPressed(){
        if(keyCode===LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 7;

        cat.addAnimation("catWalking",catImg2);
        cat.changeAnimation("catWalking");
        cat.velocityX = -4;
    }
  }
