class RubberBand
{
    constructor(bodyA,pointB)
    {
        var properties = {
            bodyA: hexagon.body, pointB: pointB, stiffness: 0.4, length: 15
        }
        this.band = Constraint.create(properties);
        this.pointB = pointB;
        World.add(world,this.band);
    }
    fly(){
        this.band.bodyA = null;
    }
    display()
    {
        if (this.band.bodyA){
            strokeWeight(6);
            line(this.band.bodyA.position.x, this.band.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }
}