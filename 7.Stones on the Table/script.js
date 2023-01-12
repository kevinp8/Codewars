function solve(stones) {
  return stones.split('').filter((i, index) => i === stones[index-1]).length
}