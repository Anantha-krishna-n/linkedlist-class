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
    print(root,space=0){
        if(root==null){
            return null
        }
        space+=10
        this.print(root.right,space)
        console.log(" ".repeat(space)+root.value);
        this.print(root.left,space)

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