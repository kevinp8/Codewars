function getSize(width, height, depth){
  return [2*(width*height + depth*height + width*depth), width*height*depth]
}