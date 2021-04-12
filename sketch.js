var canvas;
var database,playerCount;
var player,allPlayers;
var interface1
var quest
var obj
var gameState

function preload(){
}
function setup(){
  database = firebase.database();
  canvas = createCanvas(1200,600);
  interface1 = new Interface()
  interface1.getState()
  interface1.start()
 
}


function draw(){
  background("greenyellow");
  if(gameState == 1){
  
  if(playerCount>1)
    interface1.play();

  }
  drawSprites()
 
}
