function solution(list){
    let arr = []
    let subArr = []
    list.forEach((num, index) => {
      if (index == 0 || num == list[index-1]+1) {
        subArr.push(num)
        if (index == list.length-1) arr.push(subArr)
      }
      else {
        arr.push(subArr)
        subArr = [num]
        if (index == list.length-1) arr.push(subArr)
      }
    })
    return arr.map(i => i.length < 3 ? i.join(',') : `${i[0]}-${i[i.length-1]}`).join(',')
  }