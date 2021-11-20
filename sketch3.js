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


	fill(0, 0, 0);
    square_size = 50.00

	for(i=-27; i<= 27; i++){
		// translate(0, i * 50);
        // push()
		for(j=-27; j<=27; j++){
            // translate(j * 50, 0);
            //for each i and j one breake of line is doing a different behaviour
            // it is both rotated and moved 
            // bound = 4
            let bound_finder = (bound) => {return ((abs(i) == bound && abs(j)<= bound ) || (abs(j) == bound && abs(i) <= bound))};
            if (  ( i% 2 == 0 && j % 2 == 0)){
                let degree =  t
                degree =  t
                push()
                translate( 800, 600)
                scale_down = loop_var(1, 1/ sqrt(2), PI /4)
                radius1 = {x: i * square_size * scale_down, y: j * square_size * scale_down}
                // I'd like radius 1 be scaled between 1 and 1 / sqrt(2) based on time
                double_turn(radius1, {x: -1 * square_size / 2, y: -1*  square_size / 2}, square_size, t, t)
                
                pop()
            }
            if (  ( abs(i)% 2 == 1 && abs(j) % 2 == 1)){
                let degree =  t
                degree =  t
                push()
                translate( 800, 600)
                scale_down = loop_var(1, 1/ sqrt(2), PI /4)
                square_scaled_down = loop_var(square_size, 0, PI /4 )
                radius1 = {x: i * square_size * scale_down, y: j * square_size * scale_down}
                // I'd like radius 1 be scaled between 1 and 1 / sqrt(2) based on time
                double_turn(radius1, {x: -1 * square_scaled_down / 2, y: -1*  square_scaled_down / 2}, square_scaled_down, t, t)
                
                pop()
            }
            if (t >= PI / 4){
                t = 0
            }
		}
		// pop()

		// pop()
	}
  }
  