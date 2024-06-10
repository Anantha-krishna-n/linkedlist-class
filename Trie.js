class TrieNode{
    constructor(){
        this.children={}
        this.isEndofWord=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    insert(word){
        let curr=this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char]=new TrieNode()
            }
            curr=curr.children[char]
        }
        curr.isEndofWord=true
    }
    search(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndofWord;
    }
    printword(node = this.root, currword = "", result = []) {
        if (node.isEndofWord) {
            result.push(currword);
        }
        for (let char in node.children) {
            this.printword(node.children[char], currword + char, result);
        }
        return result;
    }
}

const trie = new Trie();
trie.insert("fantastic");
trie.insert("hello")
console.log(trie.printword());
console.log(trie.search("hello")
)