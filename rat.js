class Rat{
  constructor(){
    this.position = createVector(random(0,windowWidth),random(0,windowHeight));
    this.dimension = 20;
    this.alive = true;
  }

  update(){
    fill('rgb(255,0,0)');
    rect(this.position.x, this.position.y,this.dimension,this.dimension);
  }
}
