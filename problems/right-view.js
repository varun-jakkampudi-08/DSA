// Javascript program to print left view of Binary
// tree using Level order Traversal

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to return the left view of the binary tree
function leftView(root) {
    let result = [];

    if (root === null) {
        return result;
    }

    // Queue for level order traversal
    let queue = [root];

    while (queue.length > 0) {
    
    	// Temporary array for the next level
        let currqueue = []; 

        // Number of nodes at the current level
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue[i];

            // If it's the first node of the current level
            if (i === (levelSize - 1)) {
                result.push(curr.data);
            }

            // Enqueue left child
            if (curr.left !== null) {
                currqueue.push(curr.left);
            }

            // Enqueue right child
            if (curr.right !== null) {
                currqueue.push(curr.right);
            }
        }
        // Move to the next level
        queue = currqueue;
    }

    return result;
}

//Driver code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let result = leftView(root);
console.log(result.join(' '));