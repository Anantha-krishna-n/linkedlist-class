class Stack{
    constructor(){
        this.items=[]
        this.count=0;
    }
    push(element){
        this.items[this.count]=element;
        console.log(`${element} add to this ${this.count}`)
        this.count+=1
        return this.count-1;
    }
    pop(){
        if(this.count===0)return undefined
        let deleteitem=this.items[this.count-1]
        console.log(`${deleteitem} is removed `)
        this.count=1
        return deleteitem;
    }
    peek(){
        console.log(`Top element is ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }
    isEmpty(){
        console.log(this.count===0?'Stack is empty':'Stack is not empty')
        return this.count===0;
    }
    size(){
        console.log(`${this.count} elemens in stack`)
        return this.count
    }
    print(){
        let str=''
        for(let i=0;i<this.count;i++){
            str+=this.items[i];
        }
        return str
    }
}

const stack=new Stack()
stack.isEmpty()

stack.push(10)
stack.push(20)
stack.push(30)

stack.print()
stack.pop()
stack.print()
stack.peek()
stack.isEmpty()
stack.size()
stack.print()
stack.peek()

