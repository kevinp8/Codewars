function doubleEveryOther(a) {
  return a.map((i, index) => index % 2 === 0 ? i : i*2);
}