import moves from "../utils/movements.js"
// let examplePackage = require('ccapture');
var canvas
// Create a capturer that exports an animated GIF
// Notices you have to specify the path to the gif.worker.js 

let devide_complex = function(x, y) {
        let a = x.i 
        let b = x.c 
        let c = y.i
        let d = y.c

        let ans_i = (a * d - b * c) / (d ** 2 + c ** 2)
        let ans = (b * d + a * c) / (d ** 2 + c  ** 2)
        // console.log(a, b, c, d, 'ans', ans_i, ans)
        return {'i': ans_i, 'c': ans}
}

let multiply_complex = function(x, y) {
        let a = x.i 
        let b = x.c 
        let c = y.i
        let d = y.c

        return {'i': x.i * y.c + y.i * x.c, 'c': x.c * y.c - x.i * y.i}
}
let add_complex = function(x, y) {
        let a = x.i
        let b = x.c
        let c = y.i
        let d = y.c

        return {'i': a + c, 'c': b + d}
}

let extract_powers = function(params){
        let i = params.c; let j = params.i
        let b =  Math.atan((j * 1.0)/i)
        let a = Math.log((i * 1.0) / Math.cos(b))
        return {'c': a, 'i':b}
    }

let retrieve_coord = function(params){
        let a = params.c; let b = params.i;
        return {'c': Math.exp(a)* Math.cos(b), 'i': Math.exp(a)* Math.sin(b)}
}

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
        p5.n_frames = 50
        p5.n_recording = p5.n_frames

        p5.current_frame = 0
        p5.frames = Array.from({length: p5.n_recording})
        }


	p5.draw = () => {
		moves.draw(p5, false)
	}

        // write a transformation that drwas a line in t = 0 and a circle in t = 1 hehe e
	p5._drawme = function(){
                p5.circle(100, 100, 100)
                let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;
		p5.background(255, 255, 255)
                let j = -0.01
                p5.translate( 220, 220) //the distance to the first center 
                p5.scale(8)
                const js = [ -0.3, -0.4]
                // const js = [-0.01]
                let wave = function(x){
                        // return p5.sin(x * p5.TWO_PI)
                        // return t
                        return moves.ease(p5.map(p5.sin(x * p5.TWO_PI), -1, 1, 0, 1), 4.75)
                }
                for (const ind in js) {
                        j = js[ind]
                        console.log('j', j)
                        for (let i = -1000; i <  1000; i = i + 0.01) {
                                p5.stroke('#fae')
                                let a = {'i': 0, 'c': 0}
                                let b = {'i': 0, 'c': 1}
                                let c = {'i': 0, 'c': 1}
                                let d = {'i': 0, 'c': 0}
                                let z = {'i': j, 'c': i}
                                // let wave = function(time){
                                //         return p5.map()
                                // }
                                let top = {'i': j * (1-(wave(t))) , 'c': i * (1-wave(t)) + wave(t)}
                                let bottom = {'i': j * wave(t) , 'c': i * wave(t) + (1-wave(t))}
                                // let bottom = c * z + d
                                // a to osilate between 1 and 0 b to oscillate between 0 and 1
                                // c to oscillate between 0 and 1 d to oscillate between 1 and 0
                                // let res = devide_complex({'i': 0, 'c': 1}, z)
                                let res = devide_complex(top, bottom)
                                
                                p5.strokeWeight(0.1)
                                // let dev = retrieve_coord(extract_powers(res))
                                p5.point( res.c, res.i)
                                // console.log(res.c)
                                // console.log(res.i)
                        }
                }
	};
});

