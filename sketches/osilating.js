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
    p5_drawer.setup = function() 
    {
      p5_drawer.createCanvas(2000, 2000);
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
      let speed = 20
      p5_drawer.translate(-200, 0)
      p5_drawer.time +=  0.1
      p5_drawer.background(50, 0 ,100);
      
      p5_drawer.strokeWeight(1);
      p5_drawer.fill(204, 153, 0);
      p5_drawer.fill(0, 0, 0);
      let square_size = 50.00
      p5_drawer.translate(800, 800)
      p5_drawer.push()
      p5_drawer.fill(256, 256, 256)
      p5_drawer.translate( square_size/2, square_size/2)
      p5_drawer.applyMatrix(1, 1, 0, 1, 0,0)
      p5_drawer.translate(-1 * square_size/2, -1 * square_size/2)
      p5_drawer.square(0, 0, square_size );
      p5_drawer.pop()
      p5_drawer.fill(0, 0, 0)
      p5_drawer.square(square_size/2, square_size/2, 2)
      p5_drawer.applyMatrix(p5_drawer.cos(p5_drawer.t) *p5_drawer.cos(p5_drawer.t), p5_drawer.sin(p5_drawer.t)* p5_drawer.sin(p5_drawer.t), p5_drawer.sin(p5_drawer.t) * p5_drawer.sin(p5_drawer.t), p5_drawer.cos(p5_drawer.t) , 0, 0 )
  
      p5_drawer.strokeWeight(1);
      p5_drawer.fill(204, 153, 0);
  
  
      // fill(0, 0, 0);
      square_size = 50.00
      p5_drawer.translate(800, 800)
      p5_drawer.push()
      p5_drawer.fill(256, 256, 256)
      p5_drawer.translate( square_size/2,  square_size/2)
      p5_drawer.applyMatrix(1, 1, 0, 1, 0,0)
      p5_drawer.translate(-1 * square_size/2, -1 * square_size/2)
      p5_drawer.square(0, 0, square_size );
      p5_drawer.pop()
      p5_drawer.fill(0, 0, 0)
      p5_drawer.square(square_size/2, square_size/2, 2)
      
      p5_drawer.applyMatrix(p5_drawer.cos(p5_drawer.t) * p5_drawer.cos(p5_drawer.t), p5_drawer.sin(p5_drawer.t)* p5_drawer.sin(p5_drawer.t), p5_drawer.sin(p5_drawer.t) * p5_drawer.sin(p5_drawer.t), p5_drawer.cos(p5_drawer.t) , 0, 0 )
      for( let j = 0;j <= 20; j++){
          for (let  i = 0; i <= 20; i++){
            p5_drawer.push()
              if ((i + j) % 2 == 0){
                  p5_drawer.fill(256, 256, 256);
                  p5_drawer.translate( 600 + square_size * i, 400 + square_size * j)
                  if (j % 2 == 0){
                    p5_drawer.applyMatrix(1, 0, 1, 1, 0,0)
                      // applyMatrix(cos(t) *cos(t), sin(t)* sin(t), sin(t) * sin(t), cos(t) , 0, 0 )
                  }
                  else{
                      // applyMatrix(-1 * cos(t), sin(t), -1 * sin(t),cos( t), 0, 0 )
                  }
                  p5_drawer.translate(-1 * square_size/2, -1 * square_size/2)
                  p5_drawer.square(0, 0, square_size );
              }
              p5_drawer.pop()
          }
      }
  
    }
      
  
    
    
      
    
    
  
        
    //     // for( j = 0;j <= 20; j++){
    //     //     for ( i = 0; i <= 20; i++){
    //     //         push()
    //     //         if ((i + j) % 2 == 0){
    //     //             fill(256, 256, 256);
    //     //             translate( 600 + square_size * i, 400 + square_size * j)
    //     //             if (j % 2 == 0){
    //     //                 applyMatrix(1, 0, 1, 1, 0,0)
    //     //                 // applyMatrix(cos(t) *cos(t), sin(t)* sin(t), sin(t) * sin(t), cos(t) , 0, 0 )
    //     //             }
    //     //             else{
    //     //                 // applyMatrix(-1 * cos(t), sin(t), -1 * sin(t),cos( t), 0, 0 )
    //     //             }
    //     //             translate(-1 * square_size/2, -1 * square_size/2)
    //     //             square(0, 0, square_size );
    //     //         }
    //     //         pop()
    //     //     }
    //     // }
  })
  // var time = 0;
  // var speed = 20
  // var t = 0
    
  
    function osilate(deg, domain) {
        // I want when t is equal to pi /2 it reach highest
        return domain - cos(deg) * domain
    }
    function loop_var(start, end, end_degree, domain){
        //both start.degree and end.degree must be between 0 and PI
        return (sin(t)*(end - start)) /(sin(end_degree)) + start
    }
    function double_turn(radius1, radius2, square_size, degree1, degree2) {
        //rotate arround itself 
        push()
        
      //   translate(center1.x , center1.y )
      //   rotate(degree1 )
      //   square(0, 0, 4)
        rotate(degree1)
        translate( radius1.x, radius1.y) //the distance to the first center 
      //   square(0, 0, 4)
        rotate(degree2)
        translate(radius2.x, radius2.y)
      //   scale(osilate(degree1, sqrt(2)))
        fill(256, 256, 256);
        square(0, 0, square_size );
        pop()
        noFill(0, 0, 0);
      //   square(0, 0, 4)
  
  
    }
  
  //   export  function draw() {
  //     translate(-200, 0)
  // 	time = time + speed
  // 	speed = speed/1.1
  // 	background(50, 0 ,100);
  
  // 	t += 0.01
  
      
  // 	// Draw a circle
  
  // 	strokeWeight(1);
  // 	fill(204, 153, 0);
  
  
  // 	// fill(0, 0, 0);
  //     square_size = 50.00
  //     translate(800, 800)
  //     push()
  //     fill(256, 256, 256)
  //     translate( square_size/2,  square_size/2)
  //     applyMatrix(1, 1, 0, 1, 0,0)
  //     translate(-1 * square_size/2, -1 * square_size/2)
  //     square(0, 0, square_size );
  //     pop()
  //     fill(0, 0, 0)
  //     square(square_size/2, square_size/2, 2)
      
  //         // applyMatrix(cos(t) *cos(t), sin(t)* sin(t), sin(t) * sin(t), cos(t) , 0, 0 )
  //     // for( j = 0;j <= 20; j++){
  //     //     for ( i = 0; i <= 20; i++){
  //     //         push()
  //     //         if ((i + j) % 2 == 0){
  //     //             fill(256, 256, 256);
  //     //             translate( 600 + square_size * i, 400 + square_size * j)
  //     //             if (j % 2 == 0){
  //     //                 applyMatrix(1, 0, 1, 1, 0,0)
  //     //                 // applyMatrix(cos(t) *cos(t), sin(t)* sin(t), sin(t) * sin(t), cos(t) , 0, 0 )
  //     //             }
  //     //             else{
  //     //                 // applyMatrix(-1 * cos(t), sin(t), -1 * sin(t),cos( t), 0, 0 )
  //     //             }
  //     //             translate(-1 * square_size/2, -1 * square_size/2)
  //     //             square(0, 0, square_size );
  //     //         }
  //     //         pop()
  //     //     }
  //     // }
      
  
  //   }
    
  //   export default a;