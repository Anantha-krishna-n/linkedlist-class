class Heap {
       constructor(){
        this.values=[]
       } 


       insert(value){
        this.values.push(value)
        this.bubbleUp()
       }


       bubbleUp() {
        let index = this.values.length - 1;
        let value = this.values[index];
        while (index > 0) {
          let parentIndex = Math.floor((index - 1) / 2);
          let parent = this.values[parentIndex];
          if (parent >= value) break;
          this.values[parentIndex] = value;
          this.values[index] = parent;
          index = parentIndex;
        }
      }
      extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        
        if (this.values.length > 0) {
          this.values[0] = end;
          this.heapifyDown(0, this.values.length);
        }
        return max;
      }
    
      heapifyDown(index, length) {
        while (true) {
          let largest = index;
          let leftIndex = 2 * index + 1;
          let rightIndex = 2 * index + 2;
    
          if (leftIndex < length && this.values[largest] < this.values[leftIndex])
            largest = leftIndex;
          if (rightIndex < length && this.values[largest] < this.values[rightIndex])
            largest = rightIndex;
    
          if (largest === index) break;
    
          [this.values[largest], this.values[index]] = [
            this.values[index],
            this.values[largest],
          ];
    
          index = largest;
        }
      }
    
        print(){
            console.log(this.values)
        }
    }
    const heap= new Heap()
    heap.insert(50);
heap.insert(25);
heap.insert(5);
heap.insert(15);
heap.insert(65);
heap.insert(40);
heap.insert(30);
    
   heap.print()
   

   

    
