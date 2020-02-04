//Mateo León Alzáte: Sería bueno configurar reglas en el eslint para arreglar errores

'use strict';

//Mateo León Alzáte: Utilizar let en vez de var para mantener buenas prácticas de programación.
var x = 0;
var y = 0;
var value = -1;

/*Mateo León Alzáte:La función no tiene documentación
Hay variables que se utilizan pero no se llaman*/
function setup(){
  createCanvas(windowWidth, 480);
  colorMode(RGB);
}

/*Mateo León Alzáte:La función no tiene documentación
Hay variables que se utilizan pero no se llaman*/
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

/*Mateo León Alzáte:La función no tiene documentación
Hay variables que se utilizan pero no se llaman*/
function secondsM(){
  push();
  translate(200,200);
  let s = second();  // Values from 0 - 59
  rotate(radians(s*6));
  line(0, 0, 0, -50);  
  pop();
}

/*Mateo León Alzáte:La función no tiene documentación
Hay variables que se utilizan pero no se llaman*/
function minutesM(){
  push();
  translate(200,200);
  let m = minute();  // Values from 0 - 59
  rotate(radians(m*6));
  line(0, 0, 0, -35);  
  pop();
}

/*Mateo León Alzáte:La función no tiene documentación
Hay variables que se utilizan pero no se llaman*/
function hoursH(){
  push();
  translate(200,200);
  let h = hour();    // Values from 0 - 23
  rotate(radians(h*30));
  line(0, 0, 0, -20);  
  pop();
}
