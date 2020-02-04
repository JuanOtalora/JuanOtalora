'use strict';


//Mateo León Alzáte: No se sabe qué código hizo el estudiante y cuál del tema
//Mateo León Alzáte: El video presentado no es narrado y no es mayor a 3 minutos
//Mateo León Alzáte: No tiene imagen en los student submissions en la página de John
var x = 0;
var y = 0;
var value = -1;

function setup(){
  createCanvas(windowWidth, 480);
  colorMode(RGB);
}


function draw(){
  ellipse(200, 200, 150,150);
  line(200, 125, 200, 140);
  line(200, 275, 200, 260);
  line(125, 200, 140, 200);
  line(275, 200, 260, 200);
  ellipse(200, 200, 4, 4);
  secondsM();
  minutesM();
  hoursH();
}

function secondsM(){
  push();
  translate(200,200);
  let s = second();  // Values from 0 - 59
  rotate(radians(s*6));
  line(0, 0, 0, -50);  
  pop();
}


function minutesM(){
  push();
  translate(200,200);
  let m = minute();  // Values from 0 - 59
  rotate(radians(m*6));
  line(0, 0, 0, -35);  
  pop();
}

function hoursH(){
  push();
  translate(200,200);
  let h = hour();    // Values from 0 - 23
  rotate(radians(h*30));
  line(0, 0, 0, -20);  
  pop();
}
