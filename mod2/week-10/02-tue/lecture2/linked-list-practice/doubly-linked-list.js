class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

  }


  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else{
      // right arrow === next
      // left arrow ==== prev

      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length ++;
  }

  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else{
      // add to tail when more than 1 node
      this.tail.next = newNode; // hooks up the next pointer on the old tail
      newNode.prev = this.tail; // hoooks up the prev pointer on the new node to the old tail
      // update the tail pointer
      this.tail = newNode;
    }
    this.length ++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
