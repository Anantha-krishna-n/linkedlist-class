class TrieNode {
    constructor() {
        this.children = {};
        this.isEndofWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.isEndofWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndofWord;
    }

    autocomplete(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                return [];
            }
            curr = curr.children[char];
        }
        let list = [];
        this.completeword(curr, word, list);
        return list;
    }

    completeword(curr, word, list) {
        if (curr.isEndofWord) {
            list.push(word);
        }
        for (let char in curr.children) {
            this.completeword(curr.children[char], word + char, list);
        }
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

    findLongestPrefix() {
        let prefix = "";
        let curr = this.root;

        while (curr && Object.keys(curr.children).length === 1 && !curr.isEndofWord) {
            let keys = Object.keys(curr.children);
            prefix += keys[0];
            curr = curr.children[keys[0]];
        }

        return prefix;
    }
    largestprefix() {
        let largestPrefix = "";
        let stack = [{ node: this.root, word: "" }];
    
        while (stack.length > 0) {
            let { node, word } = stack.pop();
    
            if (node.isEndofword && word.length > largestPrefix.length) {
                largestPrefix = word;
            }
    
            for (let char in node.children) {
                stack.push({ node: node.children[char], word: word + char });
            }
        }
    
        return largestPrefix;
    }
}

// Example usage
const trie = new Trie();
trie.insert("fantastic");
trie.insert("fan");
trie.insert("fanciful");
trie.insert("hello");

console.log(trie.printword()); 
console.log(trie.search("hello")); 
console.log(trie.findLongestPrefix()); 
