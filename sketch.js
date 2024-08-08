function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  

  ellipse(mouseX, mouseY, 25, 25);
}


function draw(){

  ellipse(mouseX, mouseY, 25, 25);
  let r= random(0, 255)
  let g= random(0, 255)
  let b= random(0, 255)
  fill(r,g,b)
}



function mouseClicked(){
 

  let mouseX =random(0,500)
  let mouseY =random(0,500)
  ellipse(mouseX, mouseY, 100, 100);
}

