class PinkBlock
{
    constructor(x,y)
    {
        var properties = {
            'isStatic': false,
            'restitution': 0.3,
            'density': 0.7,
            'friction': 1.0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 25, 50, properties);
        World.add(world,this.body);
    }
    display()
    {
        push();
        fill("pink");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,25,50);
        pop();
    }
}