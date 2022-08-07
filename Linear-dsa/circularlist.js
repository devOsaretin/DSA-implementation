//We can simple import the singly linkedlist class and extend it in our circular linked list
const { Node } = require("./linkedlists");

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.head.next = this.head;
      this.length++;
      return;
    }
    let newNode = new Node(data);
    this.head.next = newNode;
    newNode.next = this.head;
    this.length++;
    return;
  }
}

const cl = new CircularLinkedList();
cl.push("fokasibe");
cl.push("oriyo");
cl.push("yo");
cl.push("opor");
cl.push("kasala");
cl.push("tuoyo");
console.log(cl);
