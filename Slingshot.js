class Slingshot {

    constructor(objectA, pointB){
        var options = { bodyA:objectA,
            pointB:pointB,
            stiffness : 0.04,
            length: 10
    } 
      
     this.pointB = pointB;             
     this.chain = constraint.create(options)
     World.add(world,this.chain);         
    }
display(){
    if (this.chain.bodyA){

    
    var pointA  = this.chain.bodyA.position
    var pointB = this.pointB
    strokeWeight(3);
    line(pointA.x,pointA.y, pointB.x,pointB.y);
    }
}
fly(){
 this.chain.bodyA = null;  

}
}
