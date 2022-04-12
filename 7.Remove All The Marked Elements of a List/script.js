Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(i => !values_list.includes(i))
  }