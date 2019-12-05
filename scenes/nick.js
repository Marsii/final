class nick extends Scene {

    constructor() {
        super();
        var attacks1 = [
            { probability: 0.5, damage: -10 },
            { probability: 0.2, damage: -20 }
        ]; 
        
        var attacks2 = [
            { probability: 0.6, damage: -30 },
            { probability: 0.2, damage: -20 }
        ];
        sceneManager['battle1'] = new BattleScene("Ben", attacks1);
        sceneManager['battle2'] = new BattleScene("Sam", attacks2);

    }
    
	preload() {
//		this.character.img = loadImage('images/character.png');
		// sprite sheet - src, width, height, number of sprites
		this.walk = loadSpriteSheet('images/nick/walk.png', 48, 68, 3);
		this.idle = loadSpriteSheet('images/nick/idle.png', 48, 68, 4);
		
        /* 
		this.bg = loadSound('sounds/owen/ketsa.mp3');
		
		this.walkSounds = [];
		this.walkSounds[0] = loadSound('sounds/owen/walk0.wav');
		this.walkSounds[1] = loadSound('sounds/owen/walk1.wav');
		this.walkSounds[2] = loadSound('sounds/owen/walk2.wav');
		
		this.walkSounds[0].playMode('sustain');
		this.walkSounds[1].playMode('sustain');
		this.walkSounds[2].playMode('sustain');
*/
		this.map = new Map();
		this.map.preload('data/nick.json');
        
        var spriteSheet = loadSpriteSheet('images/nick/ben.png', 32, 32, 1);
		this.sceneLink = new NPC(400, 200, spriteSheet, "Yo! Let's Battle! *Hit Enter To Battle!*");

	}
	
	setup() {
		const animations = {
			walk: loadAnimation(this.walk),
			idle: loadAnimation(this.idle)
		};
		this.character = new Character(animations);
		this.character.changeAnimation('idle');
		
		this.map.setup();
        this.sceneLink.setup();

	}
	
	start() {
//		this.bg.play();
//		this.bg.loop();
		this.map.start();
	}
	
	end() {
//		this.bg.pause();	
	}
	
	draw() {
		background("#37a63c");
        

		/* some instructions */
		textAlign(CENTER);
		textSize(20);
		text('move your character with arrows', width/2, 90);
        text('hit enter when interacting with trainers to battle', width/2, 110);
		
		
		/* user input - move character around */
		var isWalking = false;
		if (keyIsDown(RIGHT_ARROW)) {
			this.character.speedX = 5;
			isWalking = true;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.character.speedX = -5;
			isWalking = true;
		} else {
			this.character.speedX = 0;
		}
		
		if (keyIsDown(DOWN_ARROW)) {
			this.character.speedY = 5;
			isWalking = true;
		} else if (keyIsDown(UP_ARROW)) {
			this.character.speedY = -5;	
			isWalking = true;
		} else {
			this.character.speedY = 0;
		}
		
		if (isWalking) {
			this.character.changeAnimation('walk');

		} else {
			this.character.changeAnimation('idle');
		}
		
        
		/* check npcs */
		this.sceneLink.display();
		if (this.sceneLink.overlap(this.character)) {
			/* style dialog */
			textSize(30);
			textFont("Arial");
			fill('red');
			stroke('black');
			strokeWeight(4);
			this.sceneLink.displayDialog();
			
			if (keyIsDown(ENTER)) {
				changeScene('battle1');
			}
		}
        
        
        
        
        
		/* update map */
		this.map.collide(this.character);
		this.map.move(this.character);
//		this.map.update(this.character);
		this.map.display();

		/* update character */
		this.character.update();
		this.character.display();

	}
}
