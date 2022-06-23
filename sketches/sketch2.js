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
      return domain - cos(t) * domain
  }

  function draw() {
    translate(-200, 0)
	time = time + speed
	speed = speed/1.1
	background(50, 0 ,100);

	t += 0.03

	
	// Draw a circle

	strokeWeight(1);
	fill(204, 153, 0);


	fill(0, 0, 0);
    square_size = 50.00

	for(i=0; i<= 27; i++){
		// translate(0, i * 50);
        // push()
		for(j=0; j<=27; j++){
            // translate(j * 50, 0);
            //for each i and j one breake of line is doing a different behaviour
            // it is both rotated and moved 
            if ((i + j) % 2 == 0){
                let degree =  2* PI * abs(cos(t))
                degree =  t
                push()
                translate( square_size * i , square_size * j )
                
                longer_leg = (sqrt(2) * square_size)/ (abs(tan(degree) ) + 1)
                sqr_expansion = longer_leg * longer_leg + longer_leg * longer_leg * tan(degree) * tan(degree)
                // console.log(sqrt(sqr_expansion))
                scaled_sin = sin(t) * ( square_size / 4)
                if (  (int)(j / 3) % 2 == 0 && (int)(i / 3 ) % 2 == 1){
                    // square(2*square_size , square_size , square_size  );
                    // square(-2*square_size , square_size / 2, -1 * square_size * ( 1 - abs(sin(t) / 4 )) );
                    if (j % 3 == 0) {
                        fill(100, 0, 0);
                        square(0, square_size - osilate(t, 3 * square_size), square_size );

                    }
                    if( j % 3 == 1 && i % 3 == 0){
                        // square(square_size , 0, square_size );
                        // square(0, 0, 2 );

                        push()
                        
                        translate(square_size * 1.5, square_size /2)
                        rotate(degree)
                        
                        fill(100, 0, 0);
                        square(square_size * -1.5, -1 * square_size /2, square_size );
                        pop()
                        

                    }

                    if( j % 3 == 1 && i % 3 == 2){
                        fill(0, 0, 0);

                        push()
                        
                        translate(square_size * -0.5, square_size /2)
                        rotate(degree)
                        
                        fill(100, 0, 0);
                        square(square_size * 0.5, -1 *square_size /2, square_size );
                        pop()
                        

                    }
                    if(j% 3 == 2){
                        fill(0, 0, 0);

                        push()
                        
                        translate(square_size * 0.5, square_size  * -0.5)
                        rotate(degree)
                        
                        fill(100, 0, 0);
                        square(square_size * -0.5, square_size /2, square_size );
                        pop()

                    }
                    
                }

                pop()
            }
		}
		// pop()

		// pop()
	}
  }
  