class Stack{
    constructor(){
        this.items=[]
        this.count=0
    }
    push(element){
        this.items[this.count]=element;
        console.log(`${element} add to this ${this.count}`)
        this.count+=1
        return this.count-1;
    }
    peek(){
        console.log(`${this.items[this.count-1]} is the top`)
        return this.items[this.count-1]
    }
    isEmpty(){
        console.log(this.count===0 ? 'stack is empty': 'not empty')
        return this.count===0
    }
    print(){
        let str=''
        for(let i=0;i<this.count;i++){
            str+=this.items[i];
        }
        return str
    }
    reverse() {
        let rev = ' ';
        for (let i = this.count - 1; i >= 0; i--) {
            rev += this.items[i];
        }
        return rev;
    }

}
const stack=new Stack
stack.isEmpty()
stack.peek()
stack.push('hello')

console.log(stack.print()
);
console.log(stack.reverse())