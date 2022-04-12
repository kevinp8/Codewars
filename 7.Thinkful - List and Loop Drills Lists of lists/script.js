function processData(data){
    return data.reduce((initial, item) => initial *= item[0]-item[1], 1)
  }