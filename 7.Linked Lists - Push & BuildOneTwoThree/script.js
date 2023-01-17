function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let newNode = new Node(data)
  newNode.next = head
  return newNode
}

function buildOneTwoThree() {
  let chained = null
  for (let i=3; i>0; i--){
    chained = push(chained, i)
  }
  return chained
}