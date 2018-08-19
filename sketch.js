
var light = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	snake = new Snake();
	rat = new Rat();

}

function draw() {
	background(0);
	snake.update();
	rat.update();
	if(!rat.alive){
		rat = new Rat();
	}
	
}
