function min(arr) {
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        }
    }

    return arr[minIndex];
}

function max(arr) {
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[maxIndex] < arr[i]) {
            maxIndex = i;
        }
    }

    return arr[maxIndex];
}

let data = [100, 22, 55, 67, 10, 5];
console.log(`Minimum value is ${min(data)}`);
console.log(`Maximum value is ${max(data)}`);
