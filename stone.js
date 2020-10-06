class Stone{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
        this.r=r
        this.stone=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);


	}
	display()
	{
			
		var bobpos= this.body.position;
		
			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
			strokeWeight(3);
            fill("white")
            image(this.stone,-10,-10,70,70)
			//ellipse(0,0,this.r, this.r);
			pop()

	
			
	}

}