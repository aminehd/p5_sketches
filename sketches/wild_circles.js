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


moves.ease = function( p,  g) {
    if (p < 0.5)
      return 0.5 * Math.pow(2*p, g);
    else
      return 1 - 0.5 * Math.pow(2*(1 - p), g);
  }
moves.wave = function(p5) {
  let t = 1.0 *  (p5.current_frame-1)/p5.n_frames;

  return (input) => p5.map(p5.sin(p5.TWO_PI*(t +input)),-1,1,0,1);
}
moves.draw = function(p5) {
    // console.log('here');
    // p5.current_frame += 1
    let frame_num = 0
    if (p5.n_recording > 0){
      p5.current_frame += 1;
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
      p5.frames[p5.n_recording] = frame
      console.log(p5.current_frame)
      // p5.frames.push(frame)
      p5.save("loop_func" + p5.current_frame+ "tif");

    }
    else{
      p5.current_frame += 1;
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

export default moves;