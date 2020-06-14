export default class CircularDLL {
  constructor() {
    this.head = null;
  }

  add(data) {
    // Inserts a new node at the head
    const newNode = new CircularDLLNode(data);

    if (!this.head) {
      newNode.next = newNode;
      newNode.previous = newNode;
      this.head = newNode;
    } else {
      // insert at the head
      const oldNext = this.head.next;

      newNode.next = this.head.next;
      newNode.previous = this.head;

      this.head.next = newNode;
      oldNext.previous = newNode;
    }
  }
}

class CircularDLLNode {
  constructor(data) {
    this.next = null;
    this.previous = null;
    this.data = data;
  }
}
