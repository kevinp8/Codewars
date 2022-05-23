function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map(fruit => fruit.includes('rotten') ? fruit.replace('rotten', '').toLowerCase() : fruit.toLowerCase()) : []
}