const { factorial } = require("../../techniques/recursion");

describe("#Recursive Factorial", () => {
  it("Should return the factorial of the number", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});
