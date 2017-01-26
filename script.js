var frog;
var cars;
var trucks;

var canvas;
 
function setup() {
   canvas= createCanvas(600,400);
  
   frog=new Frog();
   
  }
function draw(){
    background(0);
    frog.show();
    
}

function Frog() {
  this.x= width/2 
  
  this.xdir=0;
  
  this.show= function() {
    fill(0,255,0);
    rectMode(CENTER);
    rect(this.x, height-20, 20, 20);
    
 }

  this.setDir= function(dir) {
     this.x+=this.xdir*5;
  }
  
  this.move= function(dir) {
    this.x+=this.xdir*5;
  }

function Car() {
  
}
  ;
}