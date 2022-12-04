function inverseSlice(items, a, b) {
  return items.filter((i, index) => (index < a) || (index >= b))
}