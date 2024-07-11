class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(value, root = this.root) {
        if (root === null) {
            return false;
        }
        if (root.value === value) {
            return true;
        } else if (value < root.value) {
            return this.search(value, root.left);
        } else {
            return this.search(value, root.right);
        }
    }

    print(root = this.root, space = 0) {
        if (root == null) {
            return;
        }
        space += 10;
        this.print(root.right, space);
        console.log(" ".repeat(space) + root.value);
        this.print(root.left, space);
    }
}

const bs = new BST();
console.log("is empty", bs.isEmpty());
bs.insert(45);
bs.insert(15);
bs.insert(35);
bs.insert(55);
bs.print();
console.log(bs.search(-15)); // This should return false
