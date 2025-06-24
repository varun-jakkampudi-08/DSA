// Javascript program to merge two sorted
// linked lists recursively
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

// Function to merge two sorted linked lists recursively
function sortedMerge(head1, head2)  {

    // Base cases
    if (head1 === null)
        return head2;
    if (head2 === null)
        return head1;

    // Recursive merging based on smaller value
    if (head1.data <= head2.data) {
        head1.next = sortedMerge(head1.next, head2);
        return head1;
    }
    else {
        head2.next = sortedMerge(head1, head2.next);
        return head2;
    }
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