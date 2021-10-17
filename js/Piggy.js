class Piggy {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.visibility=255;

    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: false,
    };
    this.piggy = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.piggy);

    this.piggyImage = loadImage("assets/enemy.png");
  }

  display() {
    if (this.piggy.speed >= 3) {
      World.remove(world, this.piggy);
      push();
      tint(255,this.visibility);
      image(this.piggyImage,this.piggy.position.x,this.piggy.position.y,this.w,this.h);
      this.visibility=this.visibility-5;
      pop();
    } else {
      var angle = this.piggy.angle;
      var pos = this.piggy.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.piggyImage, 0, 0, this.w, this.h);
      pop();
    }
  }
}
