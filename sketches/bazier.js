
var sketch =  new p5(function(p5_drawer){
  let p0, p1, p2;

  p5_drawer.setup = function() 
  {
  
    p5_drawer.createCanvas(600, 600 );
    p0 = p5_drawer.createVector(0, 300);
    p1 = p5_drawer.createVector(300, 0)
    p2 = p5_drawer.createVector(600, 300)
    
  }
  // p5_drawer.draw = function()
  //  {
  //   p5_drawer.background(50, 0 ,100);
  //   p5_drawer.time += 0.1
  //   // console.log(p5_drawer.time)
  // }

  p5_drawer.draw = function() {
    p5_drawer.background(0)
    p5_drawer.stroke(255)
    p5_drawer.strokeWeight(2)
    // p5_drawer.line(p0.x, p0.y, p1.x, p1.y)

    p5_drawer.circle(p1.x, p1.y, 10)
    let delta = 0.02
    p1.x = p5_drawer.mouseX;
    p1.y = p5_drawer.mouseY;
    
    p5_drawer.noFill()
    p5_drawer.beginShape();
    for( let t = 0; t<= 1; t += delta){
        // let x = p5_drawer.lerp(p0.x, p1.x, t)
        // let y = p5_drawer.lerp(p0.y, p1.y, t)
        // vertex(x, y) //only draws a line 
        //p5_drawer.vertex(x  , 8 *   p5_drawer.sin(x)  + 200) //didn't work as I expected

        let x1 = p5_drawer.lerp(p0.x, p1.x, t)
        let y1 = p5_drawer.lerp(p0.y, p1.y, t) 
        let x2 = p5_drawer.lerp(p1.x, p2.x, t)
        let y2 = p5_drawer.lerp(p1.y, p2.y, t)
        
        let x = p5_drawer.lerp(x1, x2, t)
        let y = p5_drawer.lerp(y1, y2, t)

        p5_drawer.point(x,y)

    }
    p5_drawer.endShape();
  }
    

  
  
    
  
  

  
})

