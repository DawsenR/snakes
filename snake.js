class Snake{
  constructor(length = 2){

    this.move = createVector(-this.speed*this.dimension,0);
    this.dimension = 20;
    this.length = length;
    this.position = new Array(this.length);
    this.random = createVector(random(0,windowWidth),random(0,windowHeight));
    this.direction = "";
    this.speed = .5;
    this.alive = true;
    for(var i = 0; i< this.length; i++){
      if(i==0){
      this.position[i] = this.random;
      }else{
        this.position[i] = createVector(this.random.x+i*this.dimension,this.random.y);
      }
    }
  }

  update(){
    fill('rgb(255,255,255)');
    for(var i = 0;i < this.length; i++){
      rect(this.position[i].x,this.position[i].y,this.dimension,this.dimension);
    }
    this.slither();
    this.detectEating();
    this.detectDeath();
  }

  slither(){
    if(this.alive){
      this.position.unshift(createVector(0,0));
      this.position[0].x = this.position[1].x;
      this.position[0].y = this.position[1].y;
      this.position[0].x +=this.move.x;
      this.position[0].y +=this.move.y;
      this.position.splice(this.length,1);
    }
  }

  detectEating(){
    var touching = this.dimension/2 + rat.dimension/2;
    var xDist = abs(this.position[0].x - rat.position.x);
    var yDist = abs(this.position[0].y - rat.position.y);
    if(xDist <= touching &&  yDist <= touching){
      rat.alive = false;
      this.grow();
    }

  }

  grow(){
    this.position.unshift(createVector(0,0));
    this.position[0].x = this.position[1].x;
    this.position[0].y = this.position[1].y;
    this.position[0].x +=this.move.x;
    this.position[0].y +=this.move.y;
    this.length++;
  }

  detectDeath(){
    if(this.position[0].x<0 || this.position[0].x > windowWidth || this.position[0].y < 0 || this.position[0].y>windowHeight){
      this.alive = false;
    }
  }





}

function keyPressed(){
  if(keyCode === UP_ARROW && snake.direction!="DOWN"){
    snake.move.y = -snake.speed-snake.dimension/2;
    snake.move.x = 0;
    snake.direction = "UP";
  }
  if(keyCode === DOWN_ARROW && snake.direction!="UP"){
    snake.move.y = snake.speed+snake.dimension/2;
    snake.move.x = 0;
    snake.direction = "DOWN";
  }
  if(keyCode === LEFT_ARROW && snake.direction!="RIGHT"){
    snake.move.x = -snake.speed-snake.dimension/2;
    snake.move.y = 0;
    snake.direction = "LEFT";
  }
  if(keyCode === RIGHT_ARROW && snake.direction!="LEFT"){
    snake.move.x = snake.speed+snake.dimension/2;
    snake.move.y = 0;
    snake.direction = "RIGHT";
  }

}
