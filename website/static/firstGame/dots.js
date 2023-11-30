class Dot {
    constructor(pos,radius) {
        this.pos = pos;
        this.radius = radius;
        this.offset = 50;
        this.direction = createVector();
        this.speed = 5;
        this.score = 0;
    }

    draw() {
        fill('red');
        ellipse(this.pos.x, this.pos.y, this.radius,this.radius);
    }

    collide(other) {
        let disp = p5.Vector.sub(other.pos,this.pos);
        let dist = disp.mag();
        let minDist = other.radius;
        
        if (dist < minDist) {
            if (other.type === "OBSTACLE") {
                this.score = this.score -2;
                this.speed = this.speed - 0.5;
                other.pos.x = random(-width/2,width/2);
                other.pos.y = random(-height/2,height/2);
            }

            else if (other.type === "FOOD") {
                this.score = this.score +1;
                this.speed = this.speed + 0.5;
                other.pos.x = random(-width/2,width/2);
                other.pos.y = random(-height/2,height/2);
            }
        }
    }

    
    keyPressed() {
        
        // Horizontal
        if (keyCode === RIGHT_ARROW ) {
            this.direction.x = 1;
        }
    
        else if (keyCode === LEFT_ARROW ) {
            this.direction.x = -1;
        }
        else {
            this.direction.x = 0;
        }
        
        // Vertical
        if (keyCode === UP_ARROW ) {
            this.direction.y = -1;
        }

        else if (keyCode === DOWN_ARROW ) {
            this.direction.y = +1;
        }

        else {
            this.direction.y = 0;
        }
    }

    
  


    move() {

        this.keyPressed();

        //Collision Check
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
        

        this.pos.x = this.pos.x + (this.speed * this.direction.x);
        this.pos.y = this.pos.y + (this.speed * this.direction.y);
        
    }
}