function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let len = 0
  if (head) {
    len++  
    len += length(head.next)
  }
  return len
}

function count(head, data) {
  let occ = 0
  if (head) {
    if (head.data === data) occ++   
    occ += count(head.next, data)
  }
  return occ
}