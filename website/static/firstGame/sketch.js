let dot;
let food;
let obstacles = [];

function setup() {
    createCanvas(1280,720);
    dot = new Dot(createVector(0,0),50);
    food = new Food(createVector(random(-width/2,width/2),random(-height/2,height/2)),50);
    
    
    for (let index = 0; index < 5; index++) {
        obstacles[index] = new Obstacle(createVector(random(-width/2,width/2),random(-height/2,height/2)),30);
    }
}

function draw() {
    
    background(0);
    translate(width/2,height/2);
    
    dot.draw();
    dot.move();
    dot.collide(food);
    food.draw();

    for (let index = 0; index < obstacles.length; index++) { 
        obstacles[index].draw();
        obstacles[index].move();
        dot.collide(obstacles[index]);
    }

    textSize(42);
    fill('yellow');
    textAlign(CENTER);
    text("SCORE : " + dot.score.toString(), 0 ,-640/2);
    
}

