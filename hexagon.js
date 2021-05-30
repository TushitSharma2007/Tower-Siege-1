class Hexagon{
    constructor(x,y,sides,radius){
        this.body = Bodies.polygon(x,y,sides,radius);
        this.radius = radius
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);

        fill(0,20,20);
        polygon(pos.x,pos.y,sides,radius);
    }
}