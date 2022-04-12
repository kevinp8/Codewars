function getAge(inputString){
    for (const i of inputString) {
      if (isNaN(Number(i)) != true) {
        return Number(i)
      }
    }
   }