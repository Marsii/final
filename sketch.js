/* 
	final project	
	mmp 310 
	fall 2019
*/

var scene = 'owen';

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	var sceneSelector = createSelect();
	sceneSelector.option('owen');

	sceneSelector.option('nick');
    sceneSelector.option('marsii');
    sceneSelector.option('ekaterina');
    

	sceneSelector.changed(selectScene);
}

function selectScene() {
	scene = this.value();
}



function draw() {
	if (scene == 'owen') {
		owen();
	}

    
    if (scene == 'nick') {
		nick();
	}

    if (scene == 'marsii'){
        marsii();
    }
    if (scene == 'ekaterina') {
		ekaterina();
	}

}