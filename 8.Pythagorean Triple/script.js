function isPythagoreanTriple(int) {
  let case1 = (int[0]**2) + (int[1]**2) === int[2]**2
  let case2 = (int[0]**2) + (int[2]**2) === int[1]**2
  let case3 = (int[2]**2) + (int[1]**2) === int[0]**2
  return case1||case2||case3
}