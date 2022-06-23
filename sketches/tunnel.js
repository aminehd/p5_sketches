
var sketch =  new p5(function(p5_drawer){
    let p0, p1, p2;


    let osilate = function(){
        //returns a number starting from 0 to 1 (goes to top and come backs)
        return (-1 * p5_drawer.cos(2 * p5_drawer.time) + 1) / 2
    }
    p5_drawer.setup = function() 
    {
      p5_drawer.time = 0
                  p5_drawer.with, p5_drawer.height = 600, 600
      p5_drawer.createCanvas(600, 600 );
      p0 = p5_drawer.createVector(0, 300);
      p1 = p5_drawer.createVector(300, 0)
      p2 = p5_drawer.createVector(600, 300)
      p5_drawer.samplesPerFrame = 3;
      p5_drawer.numFrames = 50;
      p5_drawer.shutterAngle = 1.5
    }
    // p5_drawer.draw = function()
    //  {
    //   p5_drawer.background(50, 0 ,100);
    //   p5_drawer.time += 0.1
    //   // console.log(p5_drawer.time)
    // }
    let out_coming_lines = function (edge1, edge2, center) {
        // p5_drawer.line(edge1.x, edge1.y, edge2.x, edge2.y)
        let t = 0;
        for( t = 0; t <= 1.01; t += 0.05){
            let anchorX = p5_drawer.lerp(edge1.x, edge2.x,t)
            let anchorY = p5_drawer.lerp(edge1.y, edge2.y, t)
            p5_drawer.line(center.x, center.y, anchorX, anchorY)
        }
    }
    let parallel_lines = function(edge1, edge2, center){
        p5_drawer.line(edge1.x, edge1.y, edge2.x, edge2.y)
        let t = 0
        for(t = 0; t <= 1.01; t += 0.08){
            let fanchorX = p5_drawer.lerp(center.x, edge1.x, t)
            let fanchorY = p5_drawer.lerp(center.y, edge1.y, t)

            let sanchorX = p5_drawer.lerp(center.x, edge2.x, t)
            let sanchoreY = p5_drawer.lerp(center.y, edge2.y, t)

            p5_drawer.line(fanchorX, fanchorY, sanchorX, sanchoreY)

        }
    }
    p5_drawer.draw = function() {
        let result = []
        // initiating a result matrix that is probably going to be used to calculate the average of the pixels over 4 different frame a = 4
        for (let i=0; i<p5_drawer.width * p5_drawer.height; i++){
            
            result[i] = 0
        }
        
        // p5_drawer.draw_()
        // p5_drawer.loadPixels()
        let c = 0;
        for (let sa=0; sa<p5_drawer.samplesPerFrame; sa++) {
            let t = p5_drawer.map(p5_drawer.frameCount-1 + sa * p5_drawer.shutterAngle/p5_drawer.samplesPerFrame, 0, p5_drawer.numFrames, 0, 5);
            p5_drawer.time = t
            p5_drawer.draw_();

            p5_drawer.loadPixels();
            for ( let i ; i <= p5_drawer.pixels.length; i++){
                result[i ] += p5_drawer.pixels[i]

            }
        }
        for ( let i ; i <= p5_drawer.pixels.length; i++){
            p5_drawer.pixels[i] = result[i]

        }
        p5_drawer.updatePixels();
            // p5_drawer.loadPixels();
            // console.log(result[0])
            // for (let i=0; i<p5_drawer.pixels.length; i++){

        //     p5_drawer.pixels[i] = 10;
        //         // Math.floor(result[i]*(1.0/p5_drawer.samplesPerFrame)) 
        // }
        // p5_drawer.updatePixels();
    }
    p5_drawer.draw_ = function () {
        // p5_drawer.time += 0.03
        p5_drawer.background(0, 0, 0)
        p5_drawer.push()
        p5_drawer.translate(300, 300)

        p5_drawer.rotate(p5_drawer.time)
        p5_drawer.translate(100, 100)
        p5_drawer.circle(0 , 0 , 10)
        p5_drawer.pop()
    }
    p5_drawer.draw_a = function() {
        
        p5_drawer.time += 0.1

        // p5_drawer.background(255* osilate())
        // p5_drawer.stroke( (255*( 1 - osilate())))

        p5_drawer.background((255*( 1 - osilate())))
        p5_drawer.stroke( 255 * osilate() )
        p5_drawer.strokeWeight(1)
        // p5_drawer.line(p0.x, p0.y, p1.x, p1.y)

        let delta = 0.02
        p1.x = p5_drawer.mouseX;
        p1.y = p5_drawer.mouseY;
        
        p5_drawer.noFill()
        p5_drawer.beginShape();
        let e1 = p5_drawer.createVector(40, 40)
        let e2 = p5_drawer.createVector(500, 0)
        let e3 = p5_drawer.createVector(500, 500)
        let e4 = p5_drawer.createVector(0, 500)
        

        let seed_center = p5_drawer.createVector(350, 350)
        let destination_center = p5_drawer.createVector(p5_drawer.lerp(e1.x, e4.x, 0.5), p5_drawer.lerp(e1.y, e4.y, 0.5))
        let center = p5_drawer.createVector(p5_drawer.lerp(seed_center.x, destination_center.x, osilate()) , p5_drawer.lerp(seed_center.y, destination_center.y, osilate()))
        // let center = p5_drawer.createVector(p5_drawer.lerp(seed_center.x, destination_center.x, p5_drawer.time) , p5_drawer.lerp(seed_center.y, destination_center.y, p5_drawer))

        // p5_drawer.circle(e2.x, e2.y, 20)
        // p5_drawer.circle(e3.x, e3.y, 20)

        p5_drawer.circle(center.x, center.y, 20)
        out_coming_lines(e1, e2, center)
        parallel_lines(e1, e2, center)

        out_coming_lines(e2, e3, center)
        parallel_lines(e2, e3, center)

        out_coming_lines(e3, e4, center)
        parallel_lines(e3, e4, center)

        out_coming_lines(e4, e1, center)
        

        // draw tunnel horizon four times
        p5_drawer.endShape();
    }
      
    
    
      
    
    
  
    
  })
  
  