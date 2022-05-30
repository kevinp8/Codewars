function solution(value){
  return value.toString().length == 5 ? `Value is ${value}` : `Value is ${'0'.repeat(5-value.toString().length) + value.toString()}`
}