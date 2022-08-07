//say that you are traveller on a 2D grid. You begin in the top-left corner and your goal is to travel
//to the bottom-right corner. You may only move down or right. In how many ways can you travel to the goal
//in a grid with dimensions m * n

const gridTraveller = (m, n, memo = {}) => {
  let key = m + " " + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  console.log(memo);

  memo[key] = gridTraveller(m, n - 1, memo) + gridTraveller(m - 1, n, memo);
  return memo[key];
};

console.log(gridTraveller(4, 3));
