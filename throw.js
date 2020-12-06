class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA=null;
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
        if (this.throw.bodyA) {
            var bodyA=this.throw.bodyA.position;
            var pointB=this.pointB;

            push();
            strokeWeight(5);
            stroke(0);
            line(bodyA.x,bodyA.y,pointB.x,pointB.y);    
            pop();
        }   

    }    
}