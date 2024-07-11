class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false; // Corrected naming convention
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
        curr.endOfWord = true;
    }

    autocomplete(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!curr.children[char]) {
                return []; // No words with the given prefix
            }
            curr = curr.children[char];
        }
        let results = [];
        this._findAllWords(curr, prefix, results);
        return results;
    }

    _findAllWords(node, prefix, results) {
        if (node.endOfWord) {
            results.push(prefix);
        }
        for (let char in node.children) {
            this._findAllWords(node.children[char], prefix + char, results);
        }
    }

    longestPrefix() {
        let prefix = "";
        let curr = this.root;

        while (curr && Object.keys(curr.children).length === 1 && !curr.endOfWord) {
            let keys = Object.keys(curr.children);
            prefix += keys[0];
            curr = curr.children[keys[0]];
        }

        return prefix;
    }

    print(node = this.root, currWord = "", result = []) {
        if (node.endOfWord) {
            result.push(currWord);
        }
        for (let char in node.children) {
            this.print(node.children[char], currWord + char, result);
        }
        return result;
    }
}

// Testing the Trie
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dobrer");

console.log("All words in the Trie:");
console.log(trie.print()); // Output: ["cat", "car", "dobrer"]

console.log("Autocomplete for 'd':");
console.log(trie.autocomplete("d")); // Output: ["dobrer"]

console.log("Longest prefix:");
console.log(trie.longestPrefix()); // Output: "c" (since "ca" is a common prefix for "cat" and "car")
