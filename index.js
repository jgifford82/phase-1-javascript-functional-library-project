// function callback(array) {
//     array.forEach(element => alert(element))
// }
function array(collection) {
    const objArray = Object.values(collection);
    // console.log(objArray)
    return objArray
}

function myEach(collection, callback) {
    const newArray = array(collection);
    newArray.forEach(element => callback(element));
    // console.log(collection)
    return collection
}

function myMap(collection, callback) {
    const newArray = array(collection);
    const mapped = newArray.map(element => callback(element));
    // console.log(collection);
    // console.log(mapped);
    return mapped;
}

function myReduce(collection, callback, ...acc) {
    console.log("acc", acc)
    // const newArray = array(collection);
    let arr = Object.values(collection)
    let newAcc;
    let i;
    let total = 0
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }
    // const reduced = newArray.reduce(element => callback(element));

    for(i; i < arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)
    }
    // console.log(reduced);
    // return reduced;
    return newAcc;
}


// myEach pseudocoding:
    // same logic as myEach, except using .map instead of forEach.
    // Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.

// myEach pseudocoding:
    // // 1: Use Object.values() on collection and return an array regardless if object or array
    // // console.log(Object.values(collection))
    // const array = Object.values(collection);
    // console.log(array)
    // // 2. Use forEach on the array in a callback function so it iterates through the array and produces an alert for each value
    // // Alert function example: function myFunction() {
    // //   alert("Hello! I am an alert box!");
    // // }
    // function callback (array) {
    //     array.forEach(element => alert(element)
    //     )};
    // // 3. Return collection