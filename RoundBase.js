class RoundBase {
          constructor(x,y,width,height){
                    var options = {
                              'restitution':0.8,
                              'friction':1.0,
                              'density':1.6,
                              'isStatic': false
                          }
                    this.body = Bodies.rectangle(x, y, width, height, options);
                    this.width = width;
            this.height = height;
            this.image = loadImage("base.png")
            World.add(world, this.body);
            var keychecker = 1;
          }
          display(){
                    
                    imageMode(CENTER);
                    image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
                    
                    if (keyCode === UP_ARROW && keychecker === 1) {
                              Matter.Body.applyForce(this.body,this.body.position, {x: 85, y: -85});
                              keychecker = 2;
                    }
                    
          }
}