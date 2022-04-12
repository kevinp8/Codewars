function wave(str){
    return str.split('').map((item, index) => item == ' ' ? false : str.slice(0,index) + str[index].toUpperCase() + str.slice(index+1)).filter(item => item != false)
  }