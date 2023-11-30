class Food {

    constructor(pos,radius) {
        this.pos = pos;
        this.radius = radius;
        this.type = "FOOD";
    }

    draw() {
        fill('green');
        ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
    }


}