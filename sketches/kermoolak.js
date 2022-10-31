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
        p5.n_frames = 70
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
                let i = 200
                // for (let i = 200; i < 400; i += 20) {
                //         for (let j = 200; j <= 400; j++){
                //                 // turn around some point 
                //                 moves.rotate_around(p5, i, j, i, j - 5, p5.map(i, 0, 1000, -8 * p5.PI, 8 *p5.PI) + p5.map(j, 0, 1000, -8 * p5.PI, 8 *p5.PI) + t * p5.TWO_PI, (m, n ) => {p5.point (m, n)})
                //                 moves.rotate_around(p5, j, i, j, i -5 , p5.map(i, 0, 1000, -8 * p5.PI, 8 *p5.PI) + p5.map(j, 0, 1000, -8 * p5.PI, 8 *p5.PI) + t * p5.TWO_PI, (m, n ) => {p5.point (m, n)})
                //         }
                // }   good for on circle
                // 
                // p5.line(-1000, 200, 1000, 200)
                // p5.line(-1000, 220, 1000, 220)
                // p5.line(-1000, 180, 1000, 180)
                // p5.line(200, -1000, 200, 1000)
                // p5.line(180, -1000, 180, 800)
                
                
                p5.scale(p5.map(moves.ease(t, 2), 0, 1, 1, 2))
                p5.translate(p5.map(moves.ease(t, 2), 0, 1, 20, 0), p5.map(moves.ease(t, 5), 0, 1, 20, 60))

                for (let i = -200; i < 1000; i += 40) {
                        for(let j = -200; j < 1000; j += 40){
                                if (Math.floor((i + j) / 40) % 2 == 0) {
                                let rotation = p5.map(moves.ease(t, 2), 0, 1, 0, p5.PI )
                                let my_scale = (input) => {return p5.map(moves.ease(t, 5), 0, 1, 1, input)}
                                let y_scale = p5.map(moves.ease(t, 2), 0, 1, 1, 2)
                                moves.sacepe_from_center(p5, 0 + rotation, rotation, i, j, 10, 1, my_scale(3), (m, n) => {p5.square(m,n, 20)})
                                moves.sacepe_from_center(p5, p5.PI/2 + rotation , rotation, i, j, 10, 1, 1, (m, n) => {p5.square(m,n, 20)})
                                moves.sacepe_from_center(p5, p5.PI + rotation, rotation, i, j, 10, 1, my_scale(3), (m, n) => {p5.square(m,n, 20)})
                                moves.sacepe_from_center(p5, 3 *(p5.PI/2) + rotation , rotation, i, j, 10, 1, 1, (m, n) => {p5.square(m,n, 20)})
                                }
                        }
                }

                p5.stroke('black')
                p5.strokeWeight(1)

	};

});

