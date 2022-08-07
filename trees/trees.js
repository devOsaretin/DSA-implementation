//Binary search tree (BST)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.count++;
      return this.root;
    }
    let currentNode = this.root;

    while (true) {
      if (currentNode.value > value) {
        if (currentNode.left != null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          this.count++;
          break;
        }
      } else if (currentNode.value < value) {
        if (currentNode.right != null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          this.count++;
          break;
        }
      } else if (currentNode.value == value) {
        console.log("duplicates are not allowed in this implementation");
        return;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      if (value > currentNode) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  size() {
    return this.count;
  }

  max() {
    if (this.count != 0) {
      let currentNode = this.root;
      while (currentNode.right) {
        currentNode = currentNode.right.value;
      }
      return currentNode;
    }
    return "Empty Tree";
  }
  min() {
    if (this.count != 0) {
      let currentNode = this.root;
      while (currentNode.left) {
        currentNode = currentNode.left.value;
      }
      return currentNode;
    }
    return "Empty Tree";
  }
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

const bst = new Bst();

module.exports = Bst;
