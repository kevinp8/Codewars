const ìsZeroBalanced = array => 
  array.length > 0 && 
  array.every(n => array.includes(-n)) && 
  array.reduce((sum, n) => sum + n) === 0;