// JavaScript program to merge two sorted linked lists
// using array

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

// Function to merge two sorted linked lists
function sortedMerge(head1, head2) {
    let arr = [];

    // Pushing the values of the first linked list
    while (head1 !== null) {
        arr.push(head1.data);
        head1 = head1.next;
    }

    // Pushing the values of the second linked list
    while (head2 !== null) {
        arr.push(head2.data);
        head2 = head2.next;
    }

    // Sorting the array
    arr.sort((x, y) => x - y);

    // Creating a new list with sorted values
    let dummy = new Node(-1);
    let curr = dummy;

    for (let value of arr) {
        curr.next = new Node(value);
        curr = curr.next;
    }

    return dummy.next;
}

function printList(curr) {
    let result = "";
    while (curr !== null) {
        result += curr.data.toString();
        if (curr.next !== null) {
            result += " ";
        }
        curr = curr.next;
    }
    console.log(result);
}

// First linked list: 5 -> 10 -> 15
let head1 = new Node(5);
head1.next = new Node(10);
head1.next.next = new Node(15);

// Second linked list: 2 -> 3 -> 20
let head2 = new Node(2);
head2.next = new Node(3);
head2.next.next = new Node(20);

let res = sortedMerge(head1, head2);
printList(res);