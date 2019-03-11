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
    }, this);
    return binaryTree;
  }
}

const list = [3, 55, 7, 33, 55, 2, 66, 37, 25, 40, 4, 6, 22];
const binaryTree = new BinaryTree(10);
console.log(binaryTree.finalBinaryTree(list));
