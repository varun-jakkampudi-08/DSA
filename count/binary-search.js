function binarySearchFirstOccurance(arr, search) {
    let left = 0;
    let right = arr.length - 1;
    let res;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == search) {
            res = mid;
            right = mid - 1;
        }
        else if (arr[mid] > search) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return res;
}

function binarySearchLastOccurance(arr, search) {
    let left = 0;
    let right = arr.length - 1;
    let res;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == search) {
            res = mid;
            left = mid + 1;
        }
        else if (arr[mid] > search) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return res;
}

let dsa = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8];
let search = 3;
let count = binarySearchLastOccurance(dsa, search) - binarySearchFirstOccurance(dsa, search) + 1;

console.log(`${search} is present ${count} times in the given array`);
