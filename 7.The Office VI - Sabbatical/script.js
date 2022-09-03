function sabb(s, val, happiness){
  let count = s.match(/[ABCILSTabcilst]/g).length
  return val + happiness + count > 22 ?  'Sabbatical! Boom!' : 'Back to your desk, boy.'

}