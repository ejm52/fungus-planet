var grStart = 0.15;
var grFinish = 0.8;
var grStep = 0.15;


function setup() {
  createCanvas(windowWidth, windowHeight);
  guiSetup();
    
    d = select('.container');
    d.position(20,0);
}

function draw() {
  background(0);
  strokeWeight(1);
  
  
 var x = gui.xShroom2
 var y = gui.yShroom2
 var x3 = gui.xShroom3
 var y3 = gui.yShroom3
 var x4 = gui.xShroom4
 var y4 = gui.yShroom4
 var x5 = gui.xShroom5
 var y5 = gui.yShroom5
 var x6 = gui.xShroom6
 var y6 = gui.yShroom6
 var w = gui.width
 var h = gui.height
 var cw = gui.capWidth
 var ch = gui.capHeight
 
 
  if (gui.field){
    field();
  }
  
  if (gui.mountains){
    mountains();
  }
  
  if(gui.city){
    city();
  }

  if (gui.pond){
    pond();
  }

  if (gui.forest){
    forest();
  }
  
  if (gui.shroom){
    shroom();
  }
  
  if (gui.shroom2){
    rectMode(CENTER);
  fill(gui.stemColor);
  rect(x, y, w, h);
  fill(gui.capColor);
  arc(x, y - h /2, cw, ch, -PI, 0, CHORD);
  }
  
  if (gui.shroom3){
    fill(gui.stemColor);
  rect(x3, y3, w, h);
  fill(gui.capColor);
  arc(x3, y3 - h /2, cw, ch, -PI, 0, CHORD);
  }
  
  if(gui.shroom4){
    fill(gui.stemColor);
  rect(x4, y4, w, h);
  fill(gui.capColor);
  arc(x4, y4 - h /2, cw, ch, -PI, 0, CHORD);
  }
  
  if(gui.shroom5){
    fill(gui.stemColor);
  rect(x5, y5, w, h);
  fill(gui.capColor);
  arc(x5, y5 - h /2, cw, ch, -PI, 0, CHORD);
  }
  
  if(gui.shroom6){
    fill(gui.stemColor);
  rect(x6, y6, w, h);
  fill(gui.capColor);
  arc(x6, y6 - h /2, cw, ch, -PI, 0, CHORD);
  }
  

  noLoop();

}


function field(){
  rectMode(CENTER);
 
    fill(gui.sky);
rect(0,0,width*2, height);
  
  fill(gui.sun);
ellipse(gui.xSun, gui.ySun, gui.sunSize,gui.sunSize);
  
  fill(gui.ground);
rect(width, height, width*2, height);
}

function mountains(){
  fill(gui.mountain);
  triangle(gui.xMount-500, height/2, gui.xMount-350, height/4, gui.xMount-190, height/2);
  triangle(gui.xMount-500/2, height/2, gui.xMount-350/2, height/2.5, gui.xMount-190/2, height/2);
}

function city(){
  fill(gui.buildings);
  rect(gui.xCity, height/4+40, width/8, height/2-80);
  rect(gui.xCity-100, height/4+75, width/6, height/2-150);
  rect(gui.xCity+125, height/4+100, width/12, height/2-200);
  //windows
  
}

function pond(){
  ellipseMode(CENTER);
  fill(gui.pondColor);
ellipse(0, height/1.3, gui.xPond, gui.yPond);
}

function forest(){
  var w = width
  var h = height
  //need to make trunks scaleable
  rectMode(CENTER);
  fill(gui.trunks);
  rect(w/2.1,h/2.5, w/7, h/1.6);
  rect(w/3.5,h/4, w/12, h/1.6);
  rect(w/1.4,h/6, w/12, h/1.2);
  rect(w/10,h/3, w/5, h/0.85);
  rect(w/1.1,h/3, w/4, h/0.8);

  ellipseMode(CENTER);
  
  fill(gui.forestCanopy);
  ellipse(w, 0, w, h/1.1);
  ellipse(w/8, 0, w/1.5, h/1.1);
   ellipse(w/1.8, 0, w/1.2, h/1.1);
}

function shroom(posX, posY, width, height, cWidth, cHeight) {
  rectMode(CENTER);
  fill(gui.stemColor);
  rect(gui.xShroom, gui.yShroom, gui.width, gui.height);
  fill(gui.capColor);
  arc(gui.xShroom, gui.yShroom - gui.height /2, gui.capWidth, gui.capHeight, -PI, 0, CHORD);
}

function guiSetup() {
  gui = new Gui();
  let gui_setup = new dat.GUI();
  
  let gui_field =
gui_setup.addFolder('field');
  gui_field.addColor(gui, 'sky').onChange(update);
  gui_field.addColor(gui, 'ground').onChange(update);
  gui_field.addColor(gui, 'sun').onChange(update);
  gui_field.add(gui, 'xSun').onChange(update);
  gui_field.add(gui, 'ySun').onChange(update);
  gui_field.add(gui, 'sunSize').onChange(update);
  //gui_field.open(); 
  
   let gui_mountains = 
gui_setup.addFolder('mountains');
  gui_mountains.add(gui, 'mountains').onChange(update);
  gui_mountains.addColor(gui, 'mountain').onChange(update);
  gui_mountains.add(gui, 'xMount').onChange(update);
  //gui_mountains.open();
  
   let gui_city = 
gui_setup.addFolder('city');
  gui_city.add(gui, 'city').onChange(update);
  gui_city.addColor(gui, 'buildings').onChange(update);
  gui_city.add(gui, 'xCity').onChange(update);
  //gui_city.open();
  
  let gui_pond =
gui_setup.addFolder('pond');
  gui_pond.add(gui, 'pond').onChange(update);
  gui_pond.add(gui, 'xPond', width/2, width/0.1).step(1).onChange(update);
  gui_pond.add(gui, 'yPond', height/4, height/2).step(1).onChange(update);
  gui_pond.addColor(gui, 'pondColor').onChange(update);
  //gui_pond.open();
  
  let gui_forest = 
gui_setup.addFolder('forest');
  gui_forest.add(gui, 'forest').onChange(update);
  gui_forest.addColor(gui, 'trunks').onChange(update);
  gui_forest.addColor(gui, 'forestCanopy').onChange(update);
  //gui_forest.open();
  
  let gui_shroom = 
gui_setup.addFolder('shroom');
  gui_shroom.add(gui, 'width', 2, 50).step(1).onChange(update);
  gui_shroom.add(gui, 'height', 2, 200).step(1).onChange(update);
  gui_shroom.add(gui, 'capWidth', 60, 130).step(1).onChange(update);
  gui_shroom.add(gui, 'capHeight', 60, 150).step(1).onChange(update);
  
  gui_shroom.addColor(gui, 'capColor').onChange(update);
  gui_shroom.addColor(gui, 'stemColor').onChange(update);
  gui_shroom.add(gui, 'shroom').onChange(update);
  gui_shroom.add(gui, 'xShroom', 0, width).step(1).onChange(update);
  gui_shroom.add(gui, 'yShroom', height/2, height).step(1).onChange(update);
  gui_shroom.add(gui, 'shroom2').onChange(update);
  gui_shroom.add(gui, 'xShroom2', 0, width).step(1).onChange(update);
  gui_shroom.add(gui, 'yShroom2', height/2, height).step(1).onChange(update);
  gui_shroom.add(gui, 'shroom3').onChange(update);
  gui_shroom.add(gui, 'xShroom3', 0, width).step(1).onChange(update);
  gui_shroom.add(gui, 'yShroom3', height/2, height).step(1).onChange(update);
  gui_shroom.add(gui, 'shroom4').onChange(update);
  gui_shroom.add(gui, 'xShroom4', 0, width).step(1).onChange(update);
  gui_shroom.add(gui, 'yShroom4', height/2, height).step(1).onChange(update);
   gui_shroom.add(gui, 'shroom5').onChange(update);
  gui_shroom.add(gui, 'xShroom5', 0, width).step(1).onChange(update);
  gui_shroom.add(gui, 'yShroom5', height/2, height).step(1).onChange(update);
  gui_shroom.add(gui, 'shroom6').onChange(update);
  gui_shroom.add(gui, 'xShroom6',0, width).step(1).onChange(update);
  gui_shroom.add(gui, 'yShroom6', height/2, height).step(1).onChange(update);
  
  //gui_shroom.open();
  
}



function Gui(){
  
  this.sky = [146,146,255];
  this.ground = [38,95,41];
  this.sun = [255, 217, 0];
  this.xSun = width/1.5;
  this.ySun = height/4;
  this.sunSize = 300;
  this.field = true
  
  
  this.mountain = [85,22,0];
  this.xMount = width;
  this.mountains = false;
  
  
  this.buildings = [115,115,115];
  this.xCity = width/2;
  this.city = false;
  
  this.forestCanopy = [32,66,0]
  this.trunks = [130,67,0];
  this.forest = false;
  
  this.pondColor = [0, 135, 180];
  this.xPond = width/2
  this.yPond = height/4;
  this.pond = false;
  
  this.capColor = [255, 0, 0];
  this.stemColor = [250,209,160];
  this.width = 20;
  this.height = 40;
  this.capWidth = 60;
  this.capHeight = 60;
  this.shroom = true;
  this.xShroom = width/1.06;
  this.yShroom = height/1.2;
  this.shroom2 = true;
  this.xShroom2 = width/1.09;
  this.yShroom2 = height/1.3;
  this.shroom3 = true;
  this.xShroom3 = width/1.15;
  this.yShroom3 = height/1.35;
  this.shroom4 = true;
  this.xShroom4 = width/1.14;
  this.yShroom4 = height/1.2;
  this.shroom5 = true;
  this.xShroom5 = width/1.2;
  this.yShroom5 = height/1.15;
  this.shroom6 = true;
  this.xShroom6 = width/1.1;
  this.yShroom6 = height/1.1;
}

function update(){
  redraw();
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}


