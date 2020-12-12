class Bob{
    constructor(x,y,radius){
        var options  = {
           restitution:1,
           friction:0,

           density:0.8,
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        World.add(world, this.body);
        this.radius = radius;
        
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        fill("#F75A94");
       
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}