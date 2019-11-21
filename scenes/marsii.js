class marsii extends Scene {

    preload() {
        this.character = new Character();
        
         this.walkright = loadSpriteSheet('images/marsii/astwalkr.png', 64, 128, 8);
         this.walkleft = loadSpriteSheet('images/marsii/astwalkl.png', 64, 128, 8);
         this.walkup = loadSpriteSheet('images/marsii/astwalku.png', 64, 128, 8)
         this.walkdown = loadSpriteSheet('images/marsii/astwalkd.png', 64, 128, 8)
         this.idle = loadSpriteSheet('images/marsii/astidle.png', 64, 128, 6);
        //this.character.img = loadImage('images/marsii/astwalkl.png');
    }
    
    setup() {
		const animations = {
           
			
            walkright: loadAnimation(this.walkright),
            walkleft: loadAnimation(this.walkleft),
            walkup: loadAnimation(this.walkup),
            walkdown: loadAnimation(this.walkdown),
            
			idle: loadAnimation(this.idle)
            
		};
		this.character = new Character(animations);
		this.character.changeAnimation('idle');
	}
    
    draw() {

        background('DodgerBlue');
        textSize(10);
        fill('black');
        textAlign(CENTER, 100);
        text("Naomi's Scene", width / 2, height / 2);

        //this.character.move();
        
        this.character.update();
		this.character.display();
		
		/* user input - move character around */
		
        var isWalkingR = false;
        var isWalkingL = false;
        var isWalkingU = false;
        var isWalkingD = false;
		if (keyIsDown(RIGHT_ARROW)) {
			this.character.speedX = 5;
			isWalkingR = true;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.character.speedX = -5;
			isWalkingL = true;
		} else {
			this.character.speedX = 0;
		}
		
		if (keyIsDown(DOWN_ARROW)) {
			this.character.speedY = 5;
			isWalkingD = true;
		} else if (keyIsDown(UP_ARROW)) {
			this.character.speedY = -5;	
			isWalkingU = true;
		} else {
			this.character.speedY = 0;
		}
		
		if (isWalkingR) {
			this.character.changeAnimation('walkright');
        } else if (isWalkingL) {
			this.character.changeAnimation('walkleft');
        } else if (isWalkingD) {
			this.character.changeAnimation('walkdown');
        } else if (isWalkingU) {
			this.character.changeAnimation('walkup');
		} else {
			this.character.changeAnimation('idle');
		}
    }
}
