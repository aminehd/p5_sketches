import moves from '../utils/movements.js'
var canvas

let sketch = new p5(function(p5){
    p5.many_centers = function(x) {
		let dist1 = Math.abs(x - 100)
		let dist2 = Math.abs(x - 300)
		let dist3 = Math.abs(x - 100)

		// console.log(300 / (25 + 0))
		return 150 / (25 + dist1) + 150 / (25 + dist2)
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
			p5.n_frames = 40
			p5.n_recording = p5.n_frames

			p5.current_frame = 0
			p5.frames = Array.from({length: p5.n_recording})
    };
        
    p5.draw = () => {
        moves.draw(p5)
    };
    p5._drawme = function(){
		p5.background(255, 255, 255)

        // for i and teta put point 
        let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;

        let max_points = 800
        let r = 400
        let center2 = p5.h /2 
        let center1 = p5.w / 2
        p5.strokeWeight(4)
        
        p5.point( center1, center2)
        
        for (let i = 0; i<= max_points; i++){
            p5.stroke('rgba(0,255,0,0.25)')
            let periodic_input = p5.map(p5.sin(p5.TWO_PI*(t + 0.05 * p5.many_centers(i))),-1,1,0, 1);
            let r = p5.map(periodic_input, 0, 1, 0, 250 )
            let tetha = p5.map(i, 0, max_points, 0, p5.TWO_PI)
            moves.rotate_around(p5, r, r, center1, center2, tetha, (m, n) =>{p5.point(m, n)})

        }

        for (let i = 0; i<= max_points; i++){
            p5.stroke('#fae')
            let periodic_input = p5.map(p5.sin(p5.TWO_PI / 4 + p5.TWO_PI*(t + 0.05 * p5.many_centers(i))),-1,1,0, 1);
            let r = p5.map(periodic_input, 0, 1, 0, 200 )
            let tetha = p5.map(i, 0, max_points, 0, p5.TWO_PI)
            moves.rotate_around(p5, r, r, center1, center2, tetha, (m, n) =>{p5.point(m, n)})

        }
        for (let i = 0; i<= max_points; i++){
            p5.stroke('#e8647a')
            p5
            let periodic_input = p5.map(p5.sin(p5.TWO_PI / 7 + p5.TWO_PI*(t + 0.05 * p5.many_centers(i))),-1,1,0, 1);
            let r = p5.map(periodic_input, 0, 1, 0, 200 )
            let tetha = p5.map(i, 0, max_points, 0, p5.TWO_PI)
            moves.rotate_around(p5, r, r, center1, center2, tetha, (m, n) =>{p5.point(m, n)})

        }
    }
});