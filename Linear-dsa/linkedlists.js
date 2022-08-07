//This is a linear dsa. Insertion is O(n) time complexity
//

class Node {
  constructor(val) {
    this.val = val; //node value or data
    this.next = null; //pointer
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
    } else {
      this.tail = this.tail.next = new Node(val); // the old tail next points to the new node
      //the tail now changes to the new node for identity and record or a marker for the next push opeartion.
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let currentVal = this.head;
    let prev = this.head;
    while (currentVal.next) {
      prev = currentVal;
      currentVal = currentVal.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return currentVal.val;
  }

  removeFromHead() {
    let deletedHead;
    if (!this.head) return undefined;
    if (!this.head.next) {
      deletedHead = this.head;
      this.head = this.tail = null;
    } else {
      deletedHead = this.head;
      this.head = this.head.next;
    }

    this.length--;
    return deletedHead.val;
  }

  getAt(index) {
    if (!this.head) {
      return;
    }
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
  }

  insertAt(val, index) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
      this.length++;
      return;
    }
    let currentHead = this.head;
    if (index === 0) {
      this.head = new Node(val);
      this.head.next = currentHead;
      this.length++;
      return;
    }
    let counter = 0;
    let currentNode = currentHead;
    let prev = this.getAt(index - 1);
    let node = new Node(val);
    while (currentNode) {
      if (counter === index) {
        prev.next = node;
        node.next = currentNode;
        this.length++;
        return this;
      }
      counter++;
      currentNode = currentNode.next;
    }
  }

  convertToArray() {
    if (!this.head) {
      return [];
    }
    let array = [];
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
      counter++;
    }
    return array;
  }

  clearList() {
    if (this.head) {
      this.head = this.tail = null;
    }
    return null;
  }

  //a -> b -> c -> d
  //d -> c -> b -> a
  reverseList() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    let prev = null;
    let next;

    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head = prev;
    return this;
  }
}

const midPoint = (list) => {
  if (!list.head) return null;
  if (list.length == 1) return list.head.val;
  let slow;
  let fast;
  slow = fast = list.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (!fast.next || !fast.next.next) {
      return slow.val;
    }
  }
};

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.insertAt("osas", 2);
list.insertAt("rhema", 3);

// console.log(list.convertToArray());
// console.log(list.reverseList());
console.log(list.convertToArray());
console.log(midPoint(list));

module.exports = { SinglyLinkedList, midPoint, Node };
