function pillars(num_pill, dist, width) {
  if (num_pill == 1) return 0
  else {
    let betweenPillars = dist * (num_pill-1) * 100
    let pillWidths = (num_pill-2) * width
    return betweenPillars + pillWidths
  }
}