function map(head, f) {
  let dummy = head ? new Node() : head
  let tail = dummy
  while (head){
    tail.data = f(head.data)
    if (head.next !== null) tail.next = new Node()
    tail = tail.next
    head = head.next
  }
  return dummy
}