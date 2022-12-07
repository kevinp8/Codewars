const sumSquareEvenRootOdd = ns => {
  return Number(ns.map((i) => i%2 === 0 ? i**2 : Math.sqrt(i)).reduce((init, i) => init + i, 0).toFixed(2))
};