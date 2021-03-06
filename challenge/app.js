// Array, function, higher order functions

// Class stucture 

// Linked list vs Array 

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed;
  }

  unshift(val) {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index > 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;

    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse(){
      let node = this.head
      this.head = this.tail
      this.tail = node

      let next;
      let prev = null

      for(let i = 0; i < this.length; i++){
          next = node.next
          node.next = prev
          prev = node
          node = next
      }
      return this
  }
  
  // [123, 456, 234, 553, 656]
//              Node  
//  [456->123]
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}


let list = new SinglyLinkedList()


list.push(123)  
list.push(456) 
list.push(234) 
list.push(553)
list.push(656)


list.print()
list.reverse()
list.print()





