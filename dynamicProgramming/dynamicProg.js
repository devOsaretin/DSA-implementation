//write a function "fib(n)" that takes in a number as argument.
//The function should return the nth number of the sequence

function fib(n, memo = {}) {
  if (n <= 2) return 1;
  if (n in memo) {
    return memo[n];
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
}

console.log(fib(50));

//say that you are traveller on a 2D grid. You begin in the top-left corner and your goal is to travel
//to the bottom-right corner. You may only move down or right. In how many ways can you travel to the goal
//in a grid with dimensions m * n
const gridTraveller = (m, n, memo = {}) => {
  let key = m + " " + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(30, 30));
console.log(gridTraveller(3, 3));
