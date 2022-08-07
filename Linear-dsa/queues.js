class Queue {
  constructor() {
    this.head = this.tail = 0;
    this.storage = {};
    this.size = 0;
  }

  enqueue(value) {
    this.storage[this.size] = value;
    this.size++;
    this.tail++;
    return this.storage;
  }

  dequeue() {
    if (this.size === 0) return null;
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.size--;
    this.tail--;
    return removed;
  }

  checkdata() {
    if (this.size === 0) return null;
    return this.storage;
  }
}

module.exports = {
  Queue,
};
const myQueue = new Queue();
// console.log(myQueue.enqueue("Mike"));
// console.log(myQueue.enqueue("Bet9ja"));
// console.log(myQueue.enqueue("DMU"));
// console.log(myQueue.enqueue("Javascript"));
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.checkdata());
