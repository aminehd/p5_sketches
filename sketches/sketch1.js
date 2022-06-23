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

  
  function draw() {
	time = time + speed
	speed = speed/1.1
	background(250, 0 ,0);

	t += 0.06

	
	// Draw a circle

	strokeWeight(1);
	fill(204, 153, 0);


	fill(204, 153, 0);
    square_size = 50.00

	for(i=0; i<= 20; i++){
		// translate(0, i * 50);
        // push()
		for(j=0; j<=20; j++){
            // translate(j * 50, 0);
            push()
            if (i %2 == j % 2){
                //for each i and j one breake of line is doing a different behaviour
                // it is both rotated and moved 
                translate( square_size * i , square_size * j )
                let degree = (PI / 8) * sin(t) + PI / 4

                longer_leg = (sqrt(2) * square_size)/ (abs(tan(degree) ) + 1)
                sqr_expansion = longer_leg * longer_leg + longer_leg * longer_leg * tan(degree) * tan(degree)
                // console.log(sqrt(sqr_expansion))

                if ( i % 2 == 0 ){
                    rotate((PI / 8) * sin(t))
                    fill(250, 250, 250);

                }
                else{
                    // rotateX(PI/8)
                    rotate((PI / 8) * (-1)*sin(t))
                    fill(0, 0, 0);
                }

                square(square_size / -2.0, square_size / -2.0, sqrt(sqr_expansion) );
            }
            pop()
		}
		// pop()

		// pop()
	}
  }
  