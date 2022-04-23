function expandedForm(num) {
  return num.toString().split('').reduce((initial, i, index) => {
    if (i == '0') return initial
    else {
      initial.push(i+'0'.repeat(num.toString().length-index-1))
      return initial
    }
  }, []).join(' + ')
}