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
var time = 0;
speed = 20
t = 0
function setup() {
	createCanvas(2000, 2000);
	// Starts in the middle
	x = width / 2;
	y = height
	time = 0;
  }

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

  function draw() {
    translate(-200, 0)
	time = time + speed
	speed = speed/1.1
	background(50, 0 ,100);

	t += 0.01

	
	// Draw a circle

	strokeWeight(1);
	fill(204, 153, 0);


	// fill(0, 0, 0);
    square_size = 50.00
    translate(800, 800)
    push()
    fill(256, 256, 256)
    translate( square_size/2,  square_size/2)
    applyMatrix(1, 1, 0, 1, 0,0)
    translate(-1 * square_size/2, -1 * square_size/2)
    square(0, 0, square_size );
    pop()
    fill(0, 0, 0)
    square(square_size/2, square_size/2, 2)
    
        // applyMatrix(cos(t) *cos(t), sin(t)* sin(t), sin(t) * sin(t), cos(t) , 0, 0 )
    // for( j = 0;j <= 20; j++){
    //     for ( i = 0; i <= 20; i++){
    //         push()
    //         if ((i + j) % 2 == 0){
    //             fill(256, 256, 256);
    //             translate( 600 + square_size * i, 400 + square_size * j)
    //             if (j % 2 == 0){
    //                 applyMatrix(1, 0, 1, 1, 0,0)
    //                 // applyMatrix(cos(t) *cos(t), sin(t)* sin(t), sin(t) * sin(t), cos(t) , 0, 0 )
    //             }
    //             else{
    //                 // applyMatrix(-1 * cos(t), sin(t), -1 * sin(t),cos( t), 0, 0 )
    //             }
    //             translate(-1 * square_size/2, -1 * square_size/2)
    //             square(0, 0, square_size );
    //         }
    //         pop()
    //     }
    // }
	

  }
  