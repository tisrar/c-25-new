class paper{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
    
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.image = loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
		    var pos = this.body.position;
			var angle = this.body.angle;
pos.x = mouseX;
pos.y = mouseY;

			push()
			translate(pos.x,pos.y);
			rotate(angle);
			imageMode(CENTER)
			strokeWeight(4);
		
			image(this.image, 0, 0, this.width, this.height);

			pop()


			
	}

}