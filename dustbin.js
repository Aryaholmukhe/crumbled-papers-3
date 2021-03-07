class Dustbin{
    constructor(x,y, width, height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png")
        World.add(world, this.body)

    }
    display(){
        var posi = this.body.position;
        fill("green")
        rectMode(CENTER)
        rect(posi.x, posi.y, this.width, this.height)
        imageMode(CENTER);
        image(this.image, posi.x, posi.y-170, 300, 350);
    }
}
