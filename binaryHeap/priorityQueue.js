class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push(new Node(value, priority));
    this.bubble();
    return this.values;
  }

  bubble() {
    let indexOfValue = this.values.length - 1;

    while (indexOfValue > 0) {
      let parentIndexOfValue = Math.floor((indexOfValue - 1) / 2);
      if (
        this.values[indexOfValue].priority >=
        this.values[parentIndexOfValue].priority
      )
        break;
      if (
        this.values[indexOfValue].priority <
        this.values[parentIndexOfValue].priority
      ) {
        //swap the values
        [this.values[parentIndexOfValue], this.values[indexOfValue]] = [
          this.values[indexOfValue],
          this.values[parentIndexOfValue],
        ];

        //re-assign the index of the value to the formal parent index
        indexOfValue = parentIndexOfValue;
      }
    }
  }
  bubbleDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          rightChild.priority < element.priority &&
          rightChild.priority < leftChild.priority
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];
      idx = swap;
    }
  }
  dequeue() {
    const max = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }

    return max;
  }
}
module.exports = PriorityQueue;
// const EMR = new PriorityQueue();
// EMR.enqueue("Accident", 4);
// EMR.enqueue("Fire Burnt", 5);
// EMR.enqueue("Gun shot wounds", 6);
// EMR.enqueue("Fever", 1);
// console.log(EMR);
// console.log(EMR.dequeue());
// console.log(EMR.dequeue());
// console.log(EMR.dequeue());
// console.log(EMR.dequeue());
