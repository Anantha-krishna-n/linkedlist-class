class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root ===null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(!root){
            root=newNode
        }else{
            if(newNode.value < root.value){
                root.left=this.insertNode(root.left,newNode)
            }else{
                root.right=this.insertNode(root.right,newNode)

            }
        }
        return root
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    BFS(){
        if(this.root==null){
            return []
        }
        let queue=[this.root]
        while(queue.length >0){
            let curr=queue.shift()
            if(curr.value){
                console.log(curr.value)
                if(curr.left){
                    queue.push(curr.left)
                }
                if(curr.right){
                    queue.push(curr.right)
                }
            }


        }
    }
    isBST(root) {
           if(!root)return true
           if(root.right && root.right.value <=root.value)return false
           if(root.left && root.left.value >=root.value)return false
           return this.isBST(this.left)&&this.isBST(this.right)
          }
    PreOrder(root){
        if(root){
            console.log(root.value)
            this.PreOrder(root.left)
            this.PreOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.PreOrder(root.left)
            console.log(root.value)
            this.PreOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.PreOrder(root.left)
            this.PreOrder(root.right)
            console.log(root.value)
        }

    }
    secondsmallest(root){
        if(!root)return null
        let parent=null
        let curr=root
        while(curr.left!==null){
            parent=curr
            curr=curr.left
        }
        if(curr.right===null){
            return parent?parent.value:null
        }   
        curr=curr.right
        while(curr.left!==null){
            curr=curr.left
        }
        return curr.value
      }
      secondLargest(root) {
          if (!root) return null;
          let parent = null;
          let current = root;
  
          while (current.right !== null) {
              parent = current;
              current = current.right;
          }
  
          if (current.left === null) {
              return parent ? parent.value : null;
          }
  
          current = current.left;
          while (current.right !== null) {
              current = current.right;
          }
          return current.value;
      }
      thirdsmallest() {
        let count = 0;
        let result = null;

        function inOrder(node) {
            if (node === null || count >= 3) {
                return;
            }

            inOrder(node.left);
            count++;
            if (count === 3) {
                result = node.value;
                return;
            }
            inOrder(node.right);
        }

        inOrder(this.root);
        return result;
    }
      maxHeight(root){
          if(root===null)return 0
          let leftchild=this.maxHeight(root.left)
          let rightchild=this.maxHeight(root.right)
          if(leftchild > rightchild){
              return leftchild+1
          }else{
              return rightchild+1
          }
      } 
      countNodes(root = this.root) {
        if (root === null) {
            return 0;
        }
        return 1 + this.countNodes(root.left) + this.countNodes(root.right);
    }
    thirdsmallest() {
        const result = this.inOrder(this.root);
        return result.length >= 3 ? result[2] : null;
    }
    print(root,space=0){
        if(root==null){
            return null
        }
        space+=10
        this.print(root.right,space)
        console.log(" ".repeat(space)+root.value);
        this.print(root.left,space)

    }
    sumLastTwoNodesOfLeftSubtree() {
        if (!this.root || !this.root.left) return null; // If there's no left subtree, return null

        const leftSubtreeValues = this.inOrder(this.root.left); // Get all elements in the left subtree
        const n = leftSubtreeValues.length;

        if (n < 2) {
            return null; // If there are less than 2 nodes in the left subtree, return null
        }

        return leftSubtreeValues[n - 1] + leftSubtreeValues[n - 2]; // Sum the last two nodes
    }
    sumOfTree(root = this.root) {
        if (!root) return 0;
        return root.value + this.sumOfTree(root.left) + this.sumOfTree(root.right);
    }
}
const bs=new BST()
console.log("is empty",bs.isEmpty())
bs.insert(10)
bs.insert(8)
bs.insert(5)
bs.insert(11)
bs.print(bs.root)
bs.delete(5)
console.log("deleted..............................................................................")
bs.print(bs.root)
console.log("BFS traverse..")
bs.BFS(10)
console.log("preorder treverse")
bs.PreOrder(bs.root)
console.log("post order treverse")
bs.postOrder(bs.root)
console.log("inoder treverse")
bs.inOrder(bs.root)
console.log("is bst valid",bs.isBST())
console.log("Number of nodes:", bs.countNodes());
console.log('sum of the binary tree is ',bs.sumOfTree())
