var moveX,moveY;
var grosor;
var puntos = []
var colores = [[0,0,0],[255,0,0],[0,255,0],[0,0,255],[255,255,255]];
var ind;

function setup() { 
  createCanvas(500, 500); 
  smooth() ; 
  noStroke() ; 
  grosor = 10;
  ind = 0;
}
function draw() { 
  background(255) ; 
  fill (0) ; 
  puntos.forEach(function(element) {
    fill (colores[element[3]][0],colores[element[3]][1],colores[element[3]][2]) ;
  	ellipse(element[0],element[1],element[2],element[2]) ;
    
	});
   
  fill (colores[ind][0],colores[ind][1],colores[ind][2]) ;
  ellipse (mouseX,mouseY,grosor,grosor) ;
  
  
  if(keyIsPressed){
    if (keyCode == UP_ARROW) { 
      grosor += 1;
    } 
    if( keyCode == DOWN_ARROW){
      grosor-=1;
      if(grosor<1)grosor=1;
    } 
    
  }
	fill(124);
  rect(0,0,width,100);
  fill(255, 255, 255);
	text("Grosor: " + grosor, 10, 20);
  text("Color:", 10, 40);
  text("Press w or s to chance color.", 10, 60);
  text("Press UP or DOWN to chance grosor.", 10, 80);
  fill (colores[ind][0],colores[ind][1],colores[ind][2]) ;
  ellipse (60,35,10,10) ;
  
}
  

function keyPressed(){
  if (key == 'w') { 
      ind += 1;
      if(ind>4)ind=0;
    } 
    if( key == 's'){
      ind-=1;
      if(ind<0)ind=4;
    } 
}
function mouseMoved ( ) { 
  moveX=mouseX ; 
  moveY=mouseY ; 
}
function mouseDragged ( ) { 
  if(mouseY<100)return;
  puntos.push([mouseX,mouseY,grosor,ind]);
}
