class Obstacle {

    constructor(pos,radius) {
        this.pos = pos;
        this.radius = radius;
        this.xoff = random(0,100000);
        this.yoff = random(0,100000);
        this.speed = 5;
        this.type = "OBSTACLE";
    }

    draw() {
        fill('red');
        square(this.pos.x,this.pos.y,this.radius);      
    }

    move() {
        this.pos.x = this.pos.x + (map(noise(this.xoff),0,1,-1,1) * this.speed);
        this.pos.y = this.pos.y + (map(noise(this.yoff),0,1,-1,1) * this.speed);

        this.xoff = this.xoff + 0.01;
        this.yoff = this.yoff + 0.01;


        if (this.pos.x > width/2) {
            this.pos.x = -width/2;
        }
        if (this.pos.x < -width/2) {
            this.pos.x = width/2;
        }
        if (this.pos.y > height/2) {
            this.pos.y = -height/2;
        }
        if (this.pos.y < -height/2) {
            this.pos.y = height/2;
        }
    }
}