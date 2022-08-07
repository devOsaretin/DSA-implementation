const { SinglyLinkedList, midPoint } = require("../linkedlists");
let list = new SinglyLinkedList();
describe("#the push method", () => {
  list.push(1);
  it("Should make the node the head and tail, in a simple case of no head", () => {
    expect(list.head.val).toBe(1);
  });

  list.push("Osaretin");

  it("Should return the length of the list", () => {
    expect(list.length).toBe(2);
  });
});

describe("#The pop method", () => {
  it("It should remove the last node in the list", () => {
    expect(list.pop()).toBe("Osaretin");
  });

  it("It should return NULL in a simple case of an empty node", () => {
    let list = new SinglyLinkedList();
    expect(list.pop()).toBe(null);
  });

  it("It should decrease the length everytime", () => {
    list.pop();
    expect(list.length).toBe(0);
  });
});

describe("#convertToArray Method", () => {
  it("It should return an empty array in a simple case of an empty list", () => {
    expect(list.convertToArray()).toStrictEqual([]);
  });
  it("It should convert a list to an array of the list node values", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.convertToArray()).toStrictEqual([1, 2, 3]);
  });
});

describe("#removeFromHead", () => {
  it("Should return undefined in a simple case of an empty list", () => {
    let list = new SinglyLinkedList();
    expect(list.removeFromHead()).toBe(undefined);
  });
  it("Should return the value of the head node", () => {
    list.push(1);
    list.push(2);
    expect(list.removeFromHead()).toBe(1);
  });
  it("Should return the length of the new list", () => {
    let list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.removeFromHead();
    expect(list.length).toBe(1);
  });
});

describe("#ClearList Method", () => {
  it("It should empty the list and return NULL", () => {
    expect(list.clearList()).toBe(null);
  });
});

describe("#Find Mid point of a List", () => {
  it("Should return null in a simple case of an empty list", () => {
    let list = new SinglyLinkedList();
    expect(midPoint(list)).toBe(null);
  });
  it("Should return the list value in a simple case of a single list", () => {
    let list = new SinglyLinkedList();
    list.push(1);
    expect(midPoint(list)).toBe(1);
  });

  it("Should return the middle value of the list in a simple case of an odd list", () => {
    let list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    expect(midPoint(list)).toBe(3);
  });

  it("Should return the first of the middle nodes in a case where the list is even", () => {
    let list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    expect(midPoint(list)).toBe(2);
  });
});
