//The stack is a linear data structure. Just like a stack of book, the first element that goes in
//will be the last element that comes out.
// LIFO ---> Last In First Out
//Operations on stack are pop, push, peek

//using class and objects or arrays
class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  pop() {
    if (this.count === 0) return null;
    this.count--;
    let removed = this.storage[this.count];
    delete this.storage[this.count];

    return removed;
  }
  push(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.storage;
  }

  peek() {
    if (this.count === 0) return null;
    return this.storage[this.count - 1];
  }
}

module.exports = {
  Stack,
};
// const myStack = new Stack();
// myStack.push("Rhema");
// myStack.push("Osariemen");
// myStack.push("Osaretin");
// console.log(myStack.pop());
// console.log(myStack);
