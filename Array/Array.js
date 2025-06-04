let dsa = ["Array", "Stack", "Queue", "Linked List", "Tree", "Graph", "Hash Table", "Heap"];

function getDSA() {
    return dsa;
}

function addDSA(newDSA) {
    if (typeof newDSA === 'string' && newDSA.trim() !== '') {
        dsa.push(newDSA);
        return true;
    }
    return false;
}

function removeDSA(dsaName) {
    const index = dsa.indexOf(dsaName);
    if (index !== -1) {
        dsa.splice(index, 1);
        return true;
    }
    return false;
}

function updateDSA(oldDSA, newDSA) {
    const index = dsa.indexOf(oldDSA);
    if (index !== -1 && typeof newDSA === 'string' && newDSA.trim() !== '') {
        dsa[index] = newDSA;
        return true;
    }
    return false;
}

function clearDSA() {
    dsa = [];
    return true;
}

function getDSALength() {
    return dsa.length;
}

function getDSAAtIndex(index) {
    if (index >= 0 && index < dsa.length) {
        return dsa[index];
    }
    return null;
}

function getDSAIndex(dsaName) {
    const index = dsa.indexOf(dsaName);
    return index !== -1 ? index : null;
}

function getAllDSA() {
    return dsa.slice();
}

function dsapop() {
    return dsa.pop();
}

function dsaAddBeginning(newDSA) {
    if (typeof newDSA === 'string' && newDSA.trim() !== '') {
        dsa.unshift(newDSA);
        return true;
    }
    return false;
}

function dsaRemoveBeginning() {
    if (dsa.length > 0) {
        return dsa.shift();
    }
    return null;
}

function dsaReverse() {
    dsa.reverse();
    return true;
}

function dsaSort() {
    dsa.sort();
    return true;
}

function dsaSlice(start, end) {
    if (start >= 0 && end <= dsa.length && start < end) {
        return dsa.slice(start, end);
    }
    return [];
}

function dsaJoin(separator = ', ') {
    return dsa.join(separator);
}

function dsaIncludes(dsaName) {
    return dsa.includes(dsaName);
}

console.log(getAllDSA());

module.exports = {
    getDSA,
    addDSA,
    removeDSA,
    updateDSA,
    clearDSA,
    getDSALength,
    getDSAAtIndex,
    getDSAIndex,
    getAllDSA,
    dsapop,
    dsaAddBeginning,
    dsaRemoveBeginning,
    dsaReverse,
    dsaSort,
    dsaSlice,
    dsaJoin,
    dsaIncludes,
};
