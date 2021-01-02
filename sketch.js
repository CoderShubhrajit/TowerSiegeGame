const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var ground,stand1,stand2,wall,cityImage;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13, brick14, brick15;
var t2b1, t2b2, t2b3, t2b4, t2b5, t2b6, t2b7, t2b8, t2b9, t2b10;
var slingShot, hexagon;

function preload(){
    cityImage = loadImage("city.jpg");
}

function setup(){
    var canvas = createCanvas(888,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Base(444,585,888,10);
    wall = new Base(880,300,10,600);
    stand1 = new Base(450,350,200,10);
    stand2 = new Base(700,500,200,10);

    //Tower number 1
    brick1 = new PinkBlock(415,315);
    brick2 = new PinkBlock(425,315);
    brick3 = new PinkBlock(435,315);
    brick4 = new PinkBlock(445,315);
    brick5 = new PinkBlock(455,315);
    brick6 = new PinkBlock(465,315);
    brick7 = new PinkBlock(475,315);
    brick8 = new YellowBlock(410,265);
    brick9 = new BlueBlock(445,265);
    brick10 = new YellowBlock(450,250);
    brick11 = new BlueBlock(450,265);
    brick12 = new YellowBlock(475,265);
    brick13 = new PinkBlock(400,220);
    brick14 = new PinkBlock(485,220);
    brick15 = new YellowBlock(450,250);

    //Tower number 2
    t2b1 = new YellowBlock(700,485);
    t2b2 = new YellowBlock(670,485);
    t2b3 = new YellowBlock(730,485);
    t2b4 = new BlueBlock(687,485);
    t2b5 = new BlueBlock(713,485);
    t2b6 = new YellowBlock(700,485);
    t2b7 = new PinkBlock(687,435);
    t2b8 = new PinkBlock(713,435);
    t2b9 = new YellowBlock(700,420);
    t2b10 = new BlueBlock(700,395);

    hexagon = new Polygon(100,100);
    slingShot = new RubberBand(hexagon.body, {x:100, y:85});

    Engine.run(engine);
}

function draw(){

    Engine.update(engine);

    background(cityImage);

    ground.display();
    wall.display();
    stand1.display();
    stand2.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();
    brick8.display();
    brick9.display();
    brick10.display();
    brick11.display();
    brick12.display();
    brick13.display();
    brick14.display();
    brick15.display();

    t2b1.display();
    t2b2.display();
    t2b3.display();
    t2b4.display();
    t2b5.display();
    t2b6.display();
    t2b7.display();
    t2b8.display();
    t2b9.display();
    t2b10.display();

    hexagon.display();
    slingShot.display();

    drawSprites();
    fill("lightgreen");
    textSize(30);
    text("Drag the hexagon and launch towards the towers to break them.",20,50);
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}