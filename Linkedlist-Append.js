class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
const node=new Node(value)
    if(this.isEmpty()){
      this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
    }
   append(value){
    const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
   }


    print(){
        if(this.isEmpty()){
            console.log("List is empty; ")
        }else{
            let curr=this.head
            let Listvalues=''
            while(curr){
                Listvalues+=`${curr.value} `
                curr=curr.next
            }
            console.log(Listvalues)
        }
    }
}

const list=  new LinkedList()
console.log("List is empty : ?",list.isEmpty())
console.log("List size ?:",list.getSize());
list.print()
list.append(10)
list.append(20)
list.append(30)
list.prepend(5)
list.print()




