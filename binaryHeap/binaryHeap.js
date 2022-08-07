class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubble();
    return this.values;
  }

  bubble() {
    let indexOfValue = this.values.length - 1;

    while (indexOfValue > 0) {
      let parentIndexOfValue = Math.floor((indexOfValue - 1) / 2);
      if (this.values[indexOfValue] <= this.values[parentIndexOfValue]) break;
      if (this.values[indexOfValue] > this.values[parentIndexOfValue]) {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (rightChild > element && rightChild > leftChild) {
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
  extractMax() {
    const max = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }

    return max;
  }
}
const MBH = new MaxBinaryHeap();
MBH.insert(40);
MBH.insert(50);
MBH.insert(20);
MBH.insert(15);
MBH.insert(70);
MBH.insert(120);
console.log(MBH.extractMax());

console.log(MBH);
module.exports = MaxBinaryHeap;
