class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    insertAt(data, index) {
        if (index < 0) {
            console.error("Error: Index cannot be negative.");
            return;
        }
        if (index === 0) {
            this.addFirst(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            if (current === null) {
                // If current is null, it means the index is one position
                // past the end of the list, which is valid for insertion.
                // But if we've already passed the end, it's out of bounds.
                if (previous.next === null && count === index) {
                    break;
                }
                console.error(`Error: Index ${index} is out of bounds.`);
                return;
            }
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
    }

    deleteFirst() {
        if (!this.head) {
            console.error("Error: Cannot delete from an empty list.");
            return;
        }
        this.head = this.head.next;
    }

    deleteLast() {
        if (!this.head) {
            console.error("Error: Cannot delete from an empty list.");
            return;
        }

        // If there's only one node in the list
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    deleteAt(index) {
        if (index < 0) {
            console.error("Error: Index cannot be negative.");
            return;
        }
        if (!this.head) {
            console.error("Error: Cannot delete from an empty list.");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            if (current === null) {
                console.error(`Error: Index ${index} is out of bounds.`);
                return;
            }
            previous = current;
            current = current.next;
            count++;
        }
        
        // This check handles if the index is the last element or out of bounds.
        if (current === null) {
            console.error(`Error: Index ${index} is out of bounds.`);
            return;
        }

        previous.next = current.next;
    }


    printList() {
        let current = this.head;
        let output = 'HEAD -> ';
        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }
}

// --- Demo of Insert Operations ---
const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(40);
list.addLast(50);
console.log("Original List:");
list.printList();

console.log("\nInserting 30 at index 2:");
list.insertAt(30, 2);
list.printList();

console.log("\nInserting 5 at index 0:");
list.insertAt(5, 0);
list.printList();

console.log("\nInserting 60 at index 6 (end of list):");
list.insertAt(60, 6);
list.printList();

console.log("\nTrying to insert at out-of-bounds index 10:");
list.insertAt(99, 10);
list.printList(); // List remains unchanged

console.log("\n----------------------------------\n");

// --- Demo of Delete Operations ---
console.log("Current List before Deletions:");
list.printList();

console.log("\nDeleting the first element (5):");
list.deleteFirst();
list.printList();

console.log("\nDeleting the last element (60):");
list.deleteLast();
list.printList();

console.log("\nDeleting element at index 2 (30):");
list.deleteAt(2);
list.printList();

console.log("\nTrying to delete at out-of-bounds index 5:");
list.deleteAt(5);
list.printList(); // List remains unchanged

console.log("\nDeleting remaining elements:");
list.deleteAt(0);
list.deleteAt(0);
list.deleteAt(0);
list.printList();

console.log("\nTrying to delete from an empty list:");
list.deleteLast(); // Should show an error
list.printList();