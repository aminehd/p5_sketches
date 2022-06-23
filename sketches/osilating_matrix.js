// console.log("amineh")
// console.log("bbb")
// function setup() {
// 	createCanvas(1000, 1000);
// 	// put setup code here
// }
// function draw() {
// 	t = 0
// 	createCanvas(w=500, w);
// 	n = sin; 
// 	t += 3;
// 	for(c = 0; c < w; c+=31){
// 		for (r=0; r<w;r+=31){
// 			if ((r + c)%2 < 1){
// 				beginShape(fill(0))
// 				for(i=0; i<4; i++){
// 					for(b=i*PI/2 + max(min(n(t+dist(w,w,c,r))*1.5+n(t/2)/2,1),-1)*PI,a=b+3.9;a>b+2.3;a-=.1){
// 						vertex(c+cos(b)*32+cos(a)*18,r+n(b)*32+n(a)*18)
// 						endShape();
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// import {helper} from "./helper.js"; 

// helper("This works!");

// import moves from "./movements.js"
// moves.beep()
var sketch =  new p5(function(p5_drawer){
  let p0, p1;

  p5_drawer.setup = function() 
  {
  
    p5_drawer.createCanvas(2000, 2000);
    p0 = creatVector(0, 300);
    p1 = createVector(600, 300)
    // Starts in the middle
    let x = p5_drawer.width / 2;
    let y = p5_drawer.height
    p5_drawer.t = 0;
  }
  // p5_drawer.draw = function()
  //  {
  //   p5_drawer.background(50, 0 ,100);
  //   p5_drawer.time += 0.1
  //   // console.log(p5_drawer.time)
  // }

  p5_drawer.draw = function() {
  }
    

  
  
    
  
  

  
})

