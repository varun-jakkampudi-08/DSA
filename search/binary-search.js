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

    return `${search} is present at index ${res} in the given array - first occurance`;
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

    return `${search} is present at index ${res} in the given array - last occurance`;
}

let dsa = [1, 2, 3, 3, 4, 5, 6, 7, 8];
let search = 3;

console.log(binarySearchFirstOccurance(dsa, search));
console.log(binarySearchLastOccurance(dsa, search));
