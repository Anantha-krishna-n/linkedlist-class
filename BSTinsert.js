class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.Root=null
    }
    isEmpty(){
        return this.Root===null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.Root=newNode
        }else{
            this.insertNode(this.Root,newNode)
        }
    }
    insertNode(Root,newNode){
        if(!Root){
            Root=newNode
        }else{
            if(newNode.value<Root.value){
                Root.left=this.insertNode(Root.left,newNode)
            }else{
                Root.right=this.insertNode(Root.right,newNode)

            }
        }
        return Root
    }
    print(Root,space=0){
        if(Root==null){
            return ;
        }
        space+=10;
        this.print(Root.right,space)
        console.log(" ".repeat(space) +Root.value)
        this.print(Root.left,space)
    
}

}
const bst=new BST()
console.log("is empty",bst.isEmpty())
bst.insert(10)
bst.insert(8)
bst.insert(3)
bst.insert(11)
bst.insert(5)
console.log(bst.Root)
console.log(JSON.stringify(bst.Root, null, 2));
bst.print(bst.Root)


