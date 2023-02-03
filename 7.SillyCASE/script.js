function sillycase(silly) {
  let first = silly.slice(0, Math.ceil(silly.length/2)).toLowerCase()
  let second = silly.slice(Math.ceil(silly.length/2)).toUpperCase()
  return first+second
}