function getAges(sum,difference){
  if (sum < 0 || difference < 0 ) return null
  else {
    let age1 = (sum + difference) / 2
    let age2 = (sum - difference) / 2 
    if (age1 < 0 || age2 < 0) return null
    else return [age1, age2]
  }
  
};