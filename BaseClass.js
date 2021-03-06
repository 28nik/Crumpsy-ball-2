class BaseClass {
          constructor(x,y,width,height){
                    var options = {
                              'restitution':0.8,
                              'friction':1.0,
                              'density':1.0,
                              'isStatic': true
                          }
                    this.body = createSprite(x, y, width, height, options);
                    this.body.scale = 0.45;
                    this.width = width;
            this.height = height;
            this.image = loadImage("base.png")
            World.add(world, this.body);
          }
          display(){
                    imageMode(CENTER);
                    this.body.addImage(this.image);
                    
          }
}