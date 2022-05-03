function solve(s) {
  let points = []
  let streak = 0
  s.split('').forEach(letter => {
    if (letter ==='a' || letter ==='e' || letter ==='i' || letter ==='o' || letter ==='u') {
        points.push(streak)
        streak = 0
    } else streak += letter.charCodeAt(0)-96
  })
  points.push(streak)
  return Math.max(...points)
};