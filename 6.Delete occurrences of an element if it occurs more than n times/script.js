function deleteNth(arr,n){
    let count = arr.reduce((init, num) => {
      if (init[num]) init[num]++
      else init[num]=1
      return init
    }, {})
    Object.keys(count).forEach(num => {
      if (count[num] > n) {
        for (let i=0; i<(count[num]-n); i++) {
          arr.splice(arr.lastIndexOf(parseInt(num)), 1)
        }
      }
    })
    return arr
  }