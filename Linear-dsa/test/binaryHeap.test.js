const MaxBinaryHeap = require("../../binaryHeap/binaryHeap");
const MBH = new MaxBinaryHeap();

it("Should insert properly into the Binary Heap in a simple case of an empty binary heap", () => {
  expect(MBH.insert(40)).toEqual([40]);
});
it("Should insert properly into the Binary Heap if the heap is not empty", () => {
  expect(MBH.insert(50)).toEqual([50, 40]);
  expect(MBH.insert(20)).toEqual([50, 40, 20]);
  expect(MBH.insert(15)).toEqual([50, 40, 20, 15]);
  expect(MBH.insert(70)).toEqual([70, 50, 20, 15, 40]);
  expect(MBH.insert(120)).toEqual([120, 50, 70, 15, 40, 20]);
});

it("Should remove the max value of the binary heap and bubbleup", () => {
  expect(MBH.extractMax()).toBe(120);
  expect(MBH.values).toEqual([70, 50, 20, 15, 40]);
});
