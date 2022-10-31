import moves from "../utils/movements.js"
// let examplePackage = require('ccapture');
var canvas
// Create a capturer that exports an animated GIF
// Notices you have to specify the path to the gif.worker.js 


let sketch =  new p5(function(p5){
	p5.setup = function() {
        p5.background(0)
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
		moves.draw(p5, true)
	}


	p5._drawme = function(){
                p5.circle(100, 100, 100)
                let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;
		p5.background(255, 255, 255)
                i = 200
                for (let j = 0; i < p5.w; j++) {
                    p5.point(i, j)
                }
	};
});

