//Collection functions
function myEach(collection, callback) {
    const arrayCollection = Object.values(collection)
    for (let i = 0; i < arrayCollection.length; i++) {
        callback(arrayCollection[i])
    }
    return collection
}

function myMap(collection, callback) {
    const makeItArray = Object.values(collection)
    let newArray = [];
    for (let i = 0; i < makeItArray.length; i++) {
        newArray.push(callback(makeItArray[i]))
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    const object2Array = Object.values(collection)
    acc = acc || object2Array.shift();
    for (let i in object2Array) {
        acc = callback(acc, object2Array[i], object2Array)
    }
    return acc;
}

function myFind(collection, predicate) {
    const arrCollection = Object.values(collection)
    for (let i in arrCollection) {
        if (predicate(arrCollection[i]) === true) {
            return arrCollection[i]
        }
        
    }
}

function myFilter(collection, predicate) {
    const arrCollection = Object.values(collection)
    let newArr = [];
    for (let i in arrCollection) {
        if (predicate(arrCollection[i]) === true) {
            newArr.push(arrCollection[i])
        }
    }
    return newArr
}

function mySize(collection) {
    const arrCollection = Object.keys(collection)
    return arrCollection.length
}

//Array functions
function myFirst(array, n = 1) {
    let count = 1;
    let newArray = [];
    for (let i in array) {
        if (count <= n) {
            newArray.push(array[i]);
            count++
        }
    }
    return newArray.length > 1 ? newArray : newArray[0]
}

function myLast(array, n = 1) {
    let index = array.length - n;
    return n > 1 ? array.slice(index, array.length) : array[index]
}

// function mySortBy(array, callback) {
//     return [...array].sort((a, b) => callback(a) - callback(b))
// }

function mySortBy(array, callback) {
    return [...array].sort((a, b) =>  {
        if (callback(a) < callback(b)) {
        return -1;
      }
      if (callback(a) > callback(b)) {
        return 1;
      }
    
      return 0;
    })
}

function myFlatten(array, oneLevel) {
    if (oneLevel) {
        return array.flat();
    }
    const stack = [...array];
    const res = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        }
        else {
            res.push(next)
        }
    }
    return res.reverse();
}

//Object functions
function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}