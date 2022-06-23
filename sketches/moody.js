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
        p5.n_frames = 40
        p5.n_recording = p5.n_frames

        p5.current_frame = 0
        p5.frames = Array.from({length: p5.n_recording})
        }

        
	p5.draw = () => {
		moves.draw(p5, true)
	}


	p5._drawme = function(){
                let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;
		p5.background(255, 255, 255)

                p5.translate(300, 300)
                let points = 1000
                for (let i = 0; i <= points; i++){
                        p5.push()

                        p5.fill('black')
                        let teta = p5.map(i, 0, points, 0, p5.TWO_PI)
                        let trans_x = p5.map(i, 0, points, 0, 10 * p5.TWO_PI)
                        let length = 10 * p5.sin(trans_x)
                        length = 100
                        p5.rotate(teta)
                        // p5.circle( length, length , 1)
                        
                        let addenum_length = (offset, domain, period, color) => {
                                p5.stroke(color)
                                let trans_addenum = p5.map(i, 0, points, 0, period * p5.TWO_PI)
                                let cal_length = p5.map(p5.sin(p5.TWO_PI * t), -1, 1, -1 * domain, domain) * p5.sin(trans_addenum + offset)
                                return cal_length
                        }
                        //#fae pink        
                        p5.circle( length + addenum_length(p5.TWO_PI * t, 6, 8, '#fae'),  0, 1)
                        p5.circle( length + addenum_length(p5.TWO_PI * t + p5.PI, 6, 5, '#00ff00'),  0, 1)
                        p5.circle( length +  addenum_length(p5.TWO_PI * t + p5.PI, 6, 10, '#C0C0C0'), 0, 1)



                        p5.pop()
                }
	};
});

