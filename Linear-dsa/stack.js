class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    if (!this.first) {
      this.first = this.last = new Node(val);
    } else {
      let temp = this.first;
      this.first = new Node(val);
      this.first.next = temp;
    }
    return this.size++;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    this.first = this.first.next;
    if (this.first === this.last) {
      this.last = null;
    }
    --this.size;
    return temp.val;
  }

  peek() {
    return this.first;
  }
}

const stack = new Stack();
stack.push("osas");
stack.push("osariemen");
stack.push("Rhema");

stack.pop();

stack.pop();
console.log(stack);
