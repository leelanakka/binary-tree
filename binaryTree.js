class BinaryTree {
  constructor(node) {
    this.node = node;
  }

  selectBranch(number) {
    return number < this.node ? "left" : "right";
  }

  insert(number) {
    let branch = this.selectBranch(number);
    if (!this[branch]) {
      this[branch] = new BinaryTree(number);
      return this;
    }
    this[branch].insert(number);
    return this;
  }

  finalBinaryTree(list) {
    list.reduce((tree, number) => {
      return tree.insert(number);
    }, binaryTree);
    return binaryTree;
  }
}

let list = [6, 3, 5, 1, 2, 8];
let binaryTree = new BinaryTree(3);
console.log(binaryTree.finalBinaryTree(list));
