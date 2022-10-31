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
		moves.draw(p5, false)
	}


	p5._drawme = function(){
                // at a line distance d from (0, 0)
                // reaches a circle of radius r
                // do some good transformations?? calc x and y 
                let min = 0, max = 100;
                let tokens = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
                let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;
		p5.background(255, 255, 255)
                let dist = 100.0;
                let r= 100.0;
                // dist and r are related through the transformation TODO
                for(let token of tokens){
                        let x1 = p5.map(token, min, max, 0, dist / p5.cos(45))
                        let y1 = p5.map(token, min, max, dist / p5.sin(45), 0)

                        let x2 = r * p5.sin(p5.map(token,  min, max,p5.PI *(1.25), p5.PI *(1.25) + p5.TWO_PI))
                        let y2 = r * p5.cos(p5.map(token,  min, max,p5.PI *(1.25), p5.PI *(1.25) + p5.TWO_PI))
                        let x = p5.map(moves.ease(t, 5), 0, 1, x1, x2)
                        let y = p5.map(moves.ease(t, 5), 0, 1, y1, y2)
                        console.log(x, y)
                        p5.stroke('black')
                        p5.strokeWeight(10)

                        // draw a rotated square
                        p5.push()
                        p5.translate(x, y)
                        p5.rotate(p5.map(token,  min, max,0, -1 * p5.TWO_PI))
                        // fix the refrence point to the center of the square TODO
                        p5.square(0, 0, 10)
                        p5.pop()

                }
                
	};
});

