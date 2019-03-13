package com.step.assignments.binarytree;

public class BinaryTree {
    private BinaryTree left;
    private BinaryTree right;
    private int node;

    public BinaryTree(int node) {
        this.node = node;
    }

    public static void main(String[] args) {
        int[] list = {1, 4, 2, 3, 9, 10, -1};
        BinaryTree binaryTree = new BinaryTree(3);
        binaryTree.finalBinaryTree(list);
        System.out.println(binaryTree.finalBinaryTree(list));
    }

    @Override
    public String toString() {
        return "BinaryTree{\n" +
                "\n node=" + node +
                "\nleft=" + left +
                ", \nright=" + right +
                '}';
    }

    public String selectBranch(int number) {
        return number < this.node ? "left" : "right";
    }

    public void insert(int number) {
        System.out.println(number);
        String branch = this.selectBranch(number);
        if (this.left == null && branch.equals("left")) {
            this.left = new BinaryTree(number);
            return;
        }

        if (this.right == null && branch.equals("right")) {
            this.right = new BinaryTree(number);
            return;
        }
        if (branch.equals("left")) {
            this.left.insert(number);
            return;
        }

        this.right.insert(number);
        return;
    }


    public BinaryTree finalBinaryTree(int[] numbers) {
        for (int i = 0; i < numbers.length; i++) {
            this.insert(numbers[i]);
        }
        return this;
    }
}
