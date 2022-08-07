const binaryTree = require("./trees");
class Tree extends binaryTree {
  bfs() {
    if (this.root === null) return "Empty Tree";
    let queue = [];
    let visited = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return visited;
  }

  // varieties of dfs are preorder, postorder, inorder
  // dfs is the preorder where you visit parents before children
  //In postorder, you visit the children before the parents
  //In Inorder, you visit a child then parent the child
  dfs() {
    const stack = [];
    const visited = [];
    stack.push(this.root);
    while (stack.length) {
      let currentNode = stack.pop();
      visited.push(currentNode.value);
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
    }
    return visited;
  }

  preOrderDFS() {
    const data = [];
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return data;
  }

  postOrderDFS() {
    if (this.root == null) return null;
    const data = [];
    const postOrderTraversal = (node) => {
      if (node.left) {
        postOrderTraversal(node.left);
      }
      if (node.right) {
        postOrderTraversal(node.right);
      }
      data.push(node.value);
    };

    postOrderTraversal(this.root);
    return data;
  }

  inOrderDFS() {
    const data = [];
    const inOrderDFS = (node) => {
      if (node.left) {
        inOrderDFS(node.left);
      }
      data.push(node.value);
      if (node.right) {
        inOrderDFS(node.right);
      }
    };
    inOrderDFS(this.root);
    return data;
  }
}

const tree = new Tree();
tree.insert(38);
tree.insert(20);
tree.insert(40);
tree.insert(12);
tree.insert(36);
tree.insert(52);
console.log(tree.bfs());
console.log(tree.dfs());
console.log(tree.preOrderDFS());
console.log(tree.postOrderDFS());
console.log(tree.inOrderDFS());
