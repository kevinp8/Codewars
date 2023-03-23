function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA && !listB) return null
  if (!listA) return listB
  if (!listB) return listA
  
  let dummy = listA
  while (dummy){
    if (!dummy.next) {
      dummy.next = listB
      return listA
    }
    dummy = dummy.next
  }
  // Remember to return the head of the list.
}