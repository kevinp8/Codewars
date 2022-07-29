// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
  let value = root.value
  if (root.left) {
    value += sumTheTreeValues(root.left)
  }
  if (root.right) {
    value += sumTheTreeValues(root.right)
  }
  return value
}