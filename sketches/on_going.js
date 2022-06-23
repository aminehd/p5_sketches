import moves from "../utils/movements.js"
// let examplePackage = require('ccapture');
var canvas
// Create a capturer that exports an animated GIF
// Notices you have to specify the path to the gif.worker.js 


let sketch =  new p5(function(p5){
	let p0, p1, p2;
	p5.dist = function(x, y) {
		return Math.sqrt((p5.w / 2 -x)**2 + (p5.h / 2 - y) ** 2) 
	}
	p5.many_centers = function(x, y) {
		let dist1 =  Math.sqrt((p5.w / 2 -x - 100)**2 + (p5.h / 2 - y) ** 2)
		let dist2 = Math.sqrt((p5.w / 2 -x + 100)**2 + (p5.h / 2 - y) ** 2)
		let dist3 = Math.sqrt((p5.w / 2 -x )**2 + (p5.h / 2 - y - 100) ** 2)

		// console.log(300 / (25 + 0))
		return 300 / (25 + dist1) + 300 / (25 + dist2) + 300 /dist3
	}
	p5.dist2centers = function(x, y) {
		return Math.sqrt((p5.w / 2 -x - 300)**2 + (p5.h / 2 - y) ** 2) + Math.sqrt((p5.h / 2 - y) ** 2 + (p5.w / 2 -x + 300)**2 + (p5.h / 2 - y) ** 2);

		return Math.sqrt((p5.w / 2 -x - 100)**2 + (p5.h / 2 - y) ** 2 + (p5.w / 2 -x + 100)**2 + (p5.h / 2 - y) ** 2) ;
	}
	p5.dist2centers = function(x, y) {
		return Math.sqrt((p5.w / 2 -x - 100)**2 + (p5.h / 2 - y) ** 2) + Math.sqrt((p5.h / 2 - y) ** 2 + (p5.w / 2 -x + 100)**2 + (p5.h / 2 - y) ** 2);

		return Math.sqrt((p5.w / 2 -x - 100)**2 + (p5.h / 2 - y) ** 2 + (p5.w / 2 -x + 100)**2 + (p5.h / 2 - y) ** 2) ;
	}
	p5.hyperboul = function(x, y) {
		return Math.sqrt((x - p5.w / 2)** 2 + (x - p5.w /2)  + (y - p5.h / 2) );

	}
	p5.setup = function() {
		// capturer.save()
		// p5.capturer = new CCapture( { format: 'gif', workersPath: './js/', verbose: true } );
			// let x = CCapture.bind(sketch)
			// p5.background(0)
			p5.current_frame = 0;
			p5.w = 600
			p5.h = 600
			p5.time = 0
			canvas = p5.createCanvas(p5.w, p5.h );
			// p5.size(600, 600)
			// 
			
			p5.frames = []
			p5.n_frames = 20
			p5.n_recording = p5.n_frames

			p5.current_frame = 0
			p5.frames = Array.from({length: p5.n_recording})
		}
	// p5.draw = function() {
	// 	// console.log('here');
	// 	// p5.current_frame += 1
	// 	let frame_num = 0
	// 	if (p5.n_recording > 0){
	// 		p5.current_frame += 1;
	// 		p5.n_recording -= 1
	// 		// console.log('here');
	// 		p5._drawme();
	// 		p5.loadPixels();
	// 		// p5.updatePixels();
	// 		// let frame= Array.from({length: p5.pixels.length}, () => {return 0})
	// 		let frame = Array.from({length: p5.pixels.length}, () => {return 0})
	// 		for( let i = 0; i < p5.pixels.length; i++ ){
	// 			frame[i] = p5.pixels[i]
	// 		}
	// 		p5.frames[p5.n_recording] = frame
	// 		console.log(p5.current_frame)
	// 		// p5.frames.push(frame)
	// 	}
	// 	else{
	// 		p5.current_frame += 1;
	// 		p5.current_frame %= 15;
	// 		p5.loadPixels();
	// 		let frame = p5.frames[p5.current_frame];
	// 		// console.log(p5.current_frame, 'pp')
	// 		// console.log(frame.length)

	// 		p5.loadPixels();
	// 		let d = p5.pixelDensity();
		
	// 		let index = 0
	// 		for (let i = 0; i < p5.pixels.length; i++){
	// 			p5.pixels[i] = frame[i]
	// 		}
	// 		p5.updatePixels()
	// 	}
	// };
	p5.draw = () => {
		moves.draw(p5)
	}
	p5._drawme = function(){
		// p5.background(0);
		if (p5.current_frame < 49) {
	
		}
		// p5.current_frame += 1;
		console.log(p5.h, p5.width)
		p5.background(255, 255, 255)
		for( let i = 0; i <= p5.h  ; i++){
				for (let j = 0; j <= p5.w  ; j++){
					let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;
					

					// let periodic_input = p5.sin(2 * p5.PI * (t + 0.06 *(Math.sqrt(10 *i  +  3* j * j + 4 * j))))
					// let periodic_input = p5.map(p5.sin(p5.TWO_PI*(t+0.05*j)),-1,1,0,1);
					// let periodic_input = p5.map(p5.sin(p5.TWO_PI*(t+0.05 *Math.sqrt(i  + j * j))),-1,1,0,1);

					// good working code
					// let input = p5.many_centers(i, j);
					// let periodic_input = moves.wave(p5)(input)

					// periodic_input = moves.ease(periodic_input, 3.0)
					// p5.stroke(255 *  periodic_input); // Change the color
					// p5.strokeWeight(1.3)
					// p5.point( i, j);
					

					// not nice gif like before
					// A point moving around 
					// can I use periodic as the speed of which something is moving?
					let periodic_input = p5.map(p5.sin(p5.TWO_PI*( t)) ,-1,1,0, 0.05 * p5.sin(p5.TWO_PI*p5.many_centers(i, j)));
					// let periodic_input = p5.map(p5.sin(p5.TWO_PI*(t + 0.05 * (i))),-1,1,0, 1);

					// periodic_input = Math.floor(periodic_input)
					// if ( i % 10 == 0)
					// let y = p5_drawer.lerp(p0.y, p1.y, t)
					if ((i % 20 == 1  || j % 20 == 1) && ( (Math.abs( i - p5.w) < 140 || Math.abs( i ) < 140) || (Math.abs(i - p5.w / 2 ) <= 101 && Math.abs( j - p5.h / 2) <= 101)) ){
						let deffered_x =  p5.lerp(i, p5.w / 2.0, periodic_input)
						let deffered_y = p5.lerp(j, p5.h / 2.0, periodic_input)
						p5.stroke('#fae')

						// p5.stroke(0)

						p5.point(deffered_x, deffered_y)
					}
					
						
					

					// map i and j 

					


					
				}
				// p5.save("diagonal" + p5.current_frame+ "tif");
		}
		
		// p5.loadPixels()
		// let d = p5.pixelDensity()
		// // console.log(d)
	
		// // console.log(p5.pixels.length)
		// let index = 0
		// for ( let x = 0; x<=  p5.height; x++){
		// 	for (let y = 0; y <= p5.width; y++){
		// 		for (let i = 0; i < d; i++) {
		// 			for (let j = 0; j < d; j++) {
		// 			  // loop over
		// 			  index = 4 * ((y * d + j) * p5.width * d + (x * d + i));
		// 			  let t = 1.0*(p5.current_frame-1)/50;

		// 			  let periodic_input = p5.map(p5.sin(2 * p5.PI * (t + 0.02 * y)), -1, 1, 0, 1);
		// 			  periodic_input *= 255
		// 			//   console.log(periodic_input)
		// 			//   p5.pixels[index] = Math.floor(Math.random() * 255);
		// 			//   p5.pixels[index+1] = Math.floor(Math.random() * 255);
		// 			//   p5.pixels[index+2] = Math.floor(Math.random() * 255);
		// 			//   p5.pixels[index+3] = Math.floor(Math.random() * 255);
		// 				p5.pixels[index] = periodic_input
		// 				p5.pixels[index+1] = periodic_input
		// 				p5.pixels[index+2] = periodic_input
		// 				p5.pixels[index+3] = periodic_input

		// 			}
		// 		  }
		// 	}
		// }
		// p5.updatePixels()
	};

	// 		for( let i = 0; i <= p5.height  ; i++){
	// 			for (let j = 0; j <= p5.width  ; j++){
	// 				let t = moves.osilate(p5,6)
					
	// 				let periodic_input = p5.sin(2 * p5.PI * (t + 0.06 *(Math.sqrt(2 *i * i +  3* j * j))))
	// 				// let periodic_input = p5.sin(2 * p5.PI * (t + 0.02 *(i * i  - 2 *j )))
	// 				// let periodic_input = p5.sin(2 * p5.PI * (t + 0.02 *(i * i  - j )))
	// 				// let periodic_input = p5.sin(2 * p5.PI * (t + 0.02 *(i * i - j *j)))

	// 				periodic_input = p5.map(periodic_input, -1, 1, 0, 1)
	// 				periodic_input = moves.ease(periodic_input, 5.0)
	// 				p5.stroke(255 *  periodic_input); // Change the color
	// 				p5.strokeWeight(1)
	// 				p5.point( i * 3,  j * 3);
	// 			}
	// 		// 	// p5.save("diagonal" + p5.current_frame+ "tif");
	// 		}
	// 		// if (p5.current_frame < 50) {
	// 		// 	p5.save()
	// 		// }

	// 		// if (p5.current_frame < 10) {
	// 		// 	var canvas = document.getElementById("mycanvas");
	// 		// 	var img    = canvas.toDataURL("image/png");
	// 		// 	document.write('<img src="'+img+'"/>');

	// 		//   } else if (p5.current_frame === 10) {
	// 		// 	console.log('something')

	// 		// 	capturer.stop();
	// 		// 	capturer.save();
	// 		//   }
		// }
	// let x = CCapture.bind(p5)
	// let capturer = new CCapture( { format: 'png' } );
	// capturer.start();

})

//futre 
// p2 = p5.createVector(400, 400)
			// // // p5.scale(3)
			// // p5.samplesPerFrame = 3;
			// // p5.shutterAngle = 1.5
			// // p1 = p5.createVector(300, 0)
			// // // console.log('som')