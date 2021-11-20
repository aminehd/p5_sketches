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
	translate(time, 0)
	speed = speed/1.1
	background(200);

	t += 0.07

	
	// Draw a circle

	strokeWeight(1);
	fill(204, 153, 0);


	fill(204, 153, 0);

	
	for(i=0; i<= 10; i++){
		translate(0, 50);
		push()
		for(j=0; j<=10; j++){
			translate(50, 0);
			square(0, 0, 50 *sin(-t + (i + j)*2.5)	);
		}
		pop()
	}
  }
  