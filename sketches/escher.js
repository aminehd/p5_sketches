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
		// p5.background(0);
		if (p5.current_frame < 49) {
	
		}
        // have a bunch of sqares and apply matrix to them 
        // how to evolve one curve to another
        // rotating stuff / when you rotate around x you can say your basis parallal to x doesnt change but your basises parallel to you are mapped to y and x 
        // p5.current_frame += 1;
        let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;
		let periodic_input = p5.map(p5.sin(p5.TWO_PI * t), -1,1, -500, 50)
		// console.log(periodic_input)
		p5.background(255, 255, 255)
        let extract_powers = function(params){
            let i = params.x; let j = params.y
            let b =  Math.atan((j * 1.0)/i)
            let a = Math.log((i * 1.0) / Math.cos(b))
            return {'x': a, 'y':b}
        }
        let retrieve_coord = function(params){
            let a = params.x; let b = params.y;
            return {'x': Math.exp(a)* Math.cos(b), 'y': Math.exp(a)* Math.sin(b)}
        }
        let powers = extract_powers({'x':30, 'y':2})
        // console.log(powers)
        // console.log(retrieve_coord(powers))
        // transform function and it's constants 
        let M00 = 0; let M01 = 0; let M10 = 0; let M11 = 0;
        let a_ = (p5.TWO_PI) ** 2; let b_ = p5.TWO_PI * Math.log(256); let c_ = Math.log(256) ** 2 + p5.TWO_PI ** 2
        M00 = a_ / c_ ;M10 = b_ / c_;M01 = -1*(b_ / c_);M11 = a_ /c_;
        let transform_linear = function(params){
            let a = params.x; let b = params.y;
            return {'x':a * M00 + b * M01, 'y': a * M10 + b * M11 }
        }
        let is_inside = function(x, y){
            return ((x > -150) && (x < 150) && (y > -150) && (y < 150))
        }
        // testing my transfrom linear with two input 

        // console.log(powers)
        // console.log(retrieve_coord(powers.const, powers.i))

        // console.log(powers)
        // console.log(retrieve_coord(powers.const, powers.i))
        // console.log(transform_linear({'x': Math.log(256),  'y':p5.TWO_PI}))
        // console.log(transform_linear({'x': Math.log(256),  'y':0}))

        p5.translate(0, 0)
        
        let transformed = 0;
        // a little blob to  make smaller and turned
                // p5.push()
                // p5.rotate(-2.75)
                // p5.point(transformed.x / 3.11, transformed.y / 3.11)
                // p5.pop()
                // console.log(transformed.x, transformed.y)

                // p5.point(j, i)

                // transformed = retrieve_coord(transform_linear(extract_powers({'x': i , 'y': j})))
                // p5.stroke('blue')
                // p5.point(transformed.y, transformed.x, )
                // // the atan don't give you the negative points// somwhere you use knowledge of period
                // p5.stroke('yellow')
                // p5.point(-1 * transformed.y, -1 * transformed.x,)

                // now instad swapping i and j loop do it here
                // p5.point(-1 * transformed.x, transformed.y)
                // p5.stroke('purple')
                // p5.point(transformed.x, -1 * transformed.y)
        p5.push()
        p5.translate(200, 200)
        p5.push()
        p5.square(-150, -150, 300)
        // the goal of rotation is thattransform_linear(0 ,  tan -1 (4)) becomes thattransform_linear(0 ,+ tan -1 (2)) after the 
        let sub_points = (a, b) => {return {"x": a.x - b.x,"y": a.y - b.y}}
        let limits = sub_points(transform_linear(extract_powers({x:500, y: 500})), transform_linear(extract_powers({x:250, y: 250})))
        p5.rotate(-1 *t * limits.y)
        console.log(limits)
        console.log(Math.exp(-1 * limits.x))
        p5.scale(p5.map(t, 0, 1, 1, Math.exp(-1 * limits.x)))
        for(let j = 125; j <= 32001; j = j * 2){
            // changing the range of i doesn't seen to change that much 
            // oh no it fucking those
            for( let i = -1 * j; i < 2*j; i = i + 20){

            // for( let i = -64000; i < 64000; i++){ // this i range made full squares
                
                
                p5.stroke('grey')
                
                // if square is 
                transformed = retrieve_coord(transform_linear(extract_powers({'x': j , 'y': i })))
                p5.stroke('pink')
                p5.point(transformed.x, transformed.y, ) // cosider the transformation
                p5.stroke('green')
                p5.point(-1 * transformed.x, -1 * transformed.y, )
                p5.stroke('orange')
                p5.point(-1 * transformed.y,  transformed.x, )
                p5.point(transformed.y, -1 * transformed.x, )
                // p5.pop()
    
            }
        }
        p5.pop()
        // the 200 200 translation is still there
        p5.noStroke();
        p5.rect(-300, -300, p5.w, (p5.h - 304) / 2.0)
        p5.rect(-300, 151, p5.w, 1000)
        p5.rect(-300, -300, (p5.w -303) / 2.0, (p5.h ) )
        p5.rect(151, -300, 1000 / 2.0, (p5.h ) )
        
        p5.pop()
	};
});

