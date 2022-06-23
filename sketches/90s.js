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
	p5.draw = () => {
		moves.draw(p5)
	}
	p5._drawme = function(){
		// p5.background(0);
		if (p5.current_frame < 49) {
	
		}
        // have a bunch of sqares and apply matrix to them 
        // how to evolve one curve to another
        // rotating stuff / when you rotate around x you can say your basis parallal to x doesnt change but your basises parallel to you are mapped to y and x 
        // p5.current_frame += 1;
        let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;
		let periodic_input = p5.map(p5.sin(p5.TWO_PI * t), -1,1, -500, 50)
		console.log(periodic_input)
		p5.background(255, 255, 255)
        for( let i = 0; i <= p5.h  ; i++){
            for (let j = 0; j <= p5.w  ; j++){
                // if (i % 40 == 0 || j % 40 == 0){
				if ((i - j) % 40 == 0 || j % 40 == 0){
					let color_periodic = p5.map(p5.sin(p5.TWO_PI * t + 0.005 * i), -1,1, 250, 150)
					p5.stroke(color_periodic,100,color_periodic)

                    let inv_circ_cent = {'x': periodic_input, 'y': p5.h / 2}
                    let r = -1 * periodic_input + p5.w / 2
                    let inversed_pos = moves.calculate_inverse( p5, inv_circ_cent, {"x":i, "y": j}, r)
                    p5.point(inversed_pos.x,  inversed_pos.y)
                }

            }
        }

	};
});

