class Boat {

  constructor(x, y, width, height, boatPos) {
    var options = {
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.boatPos = boatPos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
    this.image = loadImage("./assets/boat.png");
  }
  display() {
    var pos = this.body.position;
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body,{x:-2, y:1});
    push();
    translate(pos.x, pos.y);
    fill("brown");
    rectMode(CENTER);
    //rect(0, 0, this.width, this.height);
   image(this.image,0,this.boatPos,this.width,this.height)
   console.log(this.boatPos);
    pop();
  }
}
