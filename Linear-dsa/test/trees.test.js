const Bst = require("../../trees/trees");
const bst = new Bst();

it("should insert node to the root in a simple case of an empty tree", () => {
  bst.insert(38);
  expect(bst.root.value).toEqual(38);
});

it("Should insert node at the left in a case where the root node is larger than the new value", () => {
  bst.insert(20);
  expect(bst.root.left.value).toBe(20);
});

it("Should insert node at the right in a case where the root node is smaller than the new value", () => {
  bst.insert(40);
  expect(bst.root.right.value).toBe(40);
});

describe("#Searching the binary tree", () => {
  it("Should return the  true ,if value is found in the tree", () => {
    expect(bst.contains(20)).toBe(true);
  });

  it("Should return the false, if value is not found in the tree", () => {
    expect(bst.contains(14)).toBe(false);
  });
});

describe("#getting the max and min value in the tree", () => {
  it("Should return the max value in the tree", () => {
    expect(bst.max()).toBe(40);
  });
  it("Should return the max value in the tree", () => {
    expect(bst.min()).toBe(20);
  });

  it("Should return the size of the BST", () => {
    expect(bst.size()).toBe(3);
  });
});

describe("#traversal of the trees", () => {
  it("Should traverse a try in a breadth first way", () => {
    bst.insert(36);
    bst.insert(12);
    bst.insert(52);
    expect(bst.bfs()).toEqual([38, 20, 40, 12, 36, 52]);
  });
  it("Should traverse a try in a dfs preorder way", () => {
    expect(bst.preOrderDFS()).toEqual([38, 20, 12, 36, 40, 52]);
  });
  it("Should traverse a try in a dfs postorder way", () => {
    expect(bst.postOrderDFS()).toEqual([12, 36, 20, 52, 40, 38]);
  });
  it("Should traverse a try in a dfs inorder way", () => {
    expect(bst.inOrderDFS()).toEqual([12, 20, 36, 38, 40, 52]);
  });
});
