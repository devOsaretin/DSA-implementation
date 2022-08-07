const { Stack } = require("../differentstacks");

const stack = new Stack();

describe("#pop method of a stack", () => {
  it("Should return null in a simple case of an empty stack", () => {
    expect(stack.pop()).toBe(null);
  });

  it("It should return osariemen in a simple case of one element (Osariemen)", () => {
    stack.push("Osariemen");
    expect(stack.pop()).toBe("Osariemen");
  });
});

describe("#pushmethod of a stack", () => {
  it("It should return {'0' : 'Nigeria'} in a case of a push('Nigeria')", () => {
    expect(stack.push("Nigeria")).toEqual({ 0: "Nigeria" });
  });

  test("It should increase the count in a simple case of A Push", () => {
    expect(stack.count).toBe(1);
  });
});
