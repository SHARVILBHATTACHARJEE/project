class Paper{
    constructor(x,y){
var prop={
    restitution:0.3,
    friction:0,
    density:1.2
}
this.body=Bodies.circle(x,y,30)
this.image=loadImage("paper.png")
World.add(world,this.body)
}
display(){
    fill("lightgrey")
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 100, 100);
}
}
