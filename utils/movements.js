var moves = {}

moves.i = 10
moves.beep = function() {
    console.log('can you say beep')
}
// moves.osilate = function(p5, total_frame_per) {
//     //returns a number starting from 0 to 1 (goes to top and come backs)
//     // how many frames each in one loop 
//     // this is a wierd movement
//     let input_to_sin = (p5.current_frame / total_frame_per) * 2 * p5.PI;
//     if (p5.current_frame <= 100) {

//         console.log((-1 * p5.cos(input_to_sin) + 1) / 2)
//     }
//     return (-1 * p5.cos(input_to_sin) + 1) / 2

// }

moves.osilate = function(p5, total_frame_per_loop) {
    //returns a number starting from 0 to 1 (goes to top and come backs)
    // how many frames each in one loop 
    // this is a wierd movement
    let marker = (p5.current_frame / total_frame_per_loop) * 1.0
    if( p5.current_frame <= 100){
        // console.log(marker - Math.floor(marker))
    }
    return (marker - Math.floor(marker))

}


moves.ease = function( p,  g=null) {
  if (g == null){
  
    return  3*p*p - 2*p*p*p; //begining and end are 0 and 1, speed is 0 
  }
  if (p < 0.5)
    return 0.5 * Math.pow(2*p, g);
  else
    return 1 - 0.5 * Math.pow(2*(1 - p), g);
  }
moves.wave = function(p5) {
  let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;

  return (input) => p5.map(p5.sin(p5.TWO_PI*(t +input)),-1,1,0,1);
}
moves.draw = function(p5, record=false) {
    // console.log('here');
    // p5.current_frame += 1
    let frame_num = 0
    if (p5.n_recording > 0){
      p5.n_recording -= 1
      // console.log('here');
      p5._drawme();
      p5.loadPixels();
      // p5.updatePixels();
      // let frame= Array.from({length: p5.pixels.length}, () => {return 0})
      let frame = Array.from({length: p5.pixels.length}, () => {return 0})
      for( let i = 0; i < p5.pixels.length; i++ ){
        frame[i] = p5.pixels[i]
      }
      p5.frames[p5.current_frame] = frame
      p5.current_frame += 1;

      console.log(p5.current_frame)
      // p5.frames.push(frame)
      if (record){

        p5.save("loop_func" + p5.current_frame+ "tif");
      }
      

    }
    else{
      p5.current_frame += 1;
      // console.log(p5.current_frame)

      p5.current_frame %= p5.n_frames;
      p5.loadPixels();
      let frame = p5.frames[p5.current_frame];
      // console.log(p5.current_frame, 'pp')
      // console.log(frame.length)

      p5.loadPixels();
      let d = p5.pixelDensity();
    
      let index = 0
      for (let i = 0; i < p5.pixels.length; i++){
        p5.pixels[i] = frame[i]
      }
      p5.updatePixels()
    }
};
moves.rotate_around = function (p5, x, y, c_x, c_y, degree, shape) {
    //rotate arround c_x c_y 
    p5.push()
    
  //   translate(center1.x , center1.y )
  //   rotate(degree1 )
  //   square(0, 0, 4)
  p5.translate(c_x, c_y)
  p5.rotate(degree)
  p5.translate( x - c_x, y - c_y) //the distance to the first center 
  //   square(0, 0, 4)
    
    shape(0, 0)
    p5.pop()


}
moves.rotate_around_r = function (p5, r, c_x, c_y, degree, shape) {
  //rotate arround c_x c_y 
  p5.push()
  
  //   translate(center1.x , center1.y )
  //   rotate(degree1 )
  //   square(0, 0, 4)
  p5.translate(c_x, c_y)
  p5.rotate(degree)
  p5.translate( r, r) //the distance to the first center 
  //   square(0, 0, 4)
    
    shape(0, 0)
    p5.pop()


}
moves.calculate_inverse = function(p5, inverse_center, current_point, r){
  let dist = Math.sqrt( (inverse_center.x - current_point.x) ** 2 + (inverse_center.y - current_point.y) **2 )
  let new_dist = (r ** 2) / dist
  let new_point = {'x': p5.lerp(inverse_center.x, current_point.x, new_dist / dist ), 'y': p5.lerp(inverse_center.y, current_point.y, new_dist / dist) }
  
  return new_point
}


// doesn't gather any state

moves.double_turn = function(p5_drawer, center1, center2, shape_func, degree1, degree2){
     //rotate arround itself 
    push()

    //   translate(center1.x , center1.y )
    //   rotate(degree1 )
    //   square(0, 0, 4)
    rotate(degree1)
    translate( radius1.x, radius1.y) //the distance to the first center 
    //   square(0, 0, 4)
    rotate(degree2)
    translate(radius2.x, radius2.y)
    //   scale(osilate(degree1, sqrt(2)))
    fill(256, 256, 256);
    square(0, 0, square_size );
    pop()
    noFill(0, 0, 0);
    //   square(0, 0, 4)
 
 
   
}
moves.rotate_double_relative = function(p5, main_degree,relative_degree , main_center_x, main_center_y, relative_x, relative_y){
    p5.translate(main_center_x , main_center_y )
    p5.rotate(main_degree) // rotate ariund designated center
    p5.translate( relative_x, relative_y) //the distance to the first center
    p5.rotate(relative_degree) // rotate around relative
}

moves.sacepe_from_center = function(p5, d1, d2,  c_x, c_y, halfEdge, r1, r2, shape) {
    p5.push()
    moves.rotate_double_relative(p5, d1, d2, c_x, c_y, -1 * halfEdge * r1, -1 * halfEdge * r2)
    //   square(0, 0, 4)
    p5.fill(0, 0, 0)
    shape(-1 * halfEdge, -1 * halfEdge)
    p5.pop()

}
export default moves;