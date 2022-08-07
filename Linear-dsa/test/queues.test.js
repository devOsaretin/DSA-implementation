const { Queue } = require("../queues");

const myQueue = new Queue();

describe("#dequeue", () => {
  it("Should return null in a simple case of an empty queue", () => {
    expect(myQueue.dequeue()).toBe(null);
  });

  it("Should remove the first element in the queue", () => {
    myQueue.enqueue("Winner");
    myQueue.enqueue("Belgium");
    myQueue.enqueue("Betslip");
    expect(myQueue.dequeue()).toBe("Winner");
    expect(myQueue.dequeue()).toBe("Belgium");
    expect(myQueue.dequeue()).toBe("Betslip");
  });
});

describe("#enqueue", () => {
  it("Should add to the back of the queue", () => {
    expect(myQueue.enqueue("Bet9ja")).toEqual({ 0: "Bet9ja" });
  });

  it("Should increase the size of the queue when enqueue()", () => {
    expect(myQueue.size).toBe(1);
    expect(myQueue.tail).toBe(1);
  });
});
