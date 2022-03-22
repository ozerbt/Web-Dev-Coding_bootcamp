
singSong()

function singSong() {
    console.log('DO')
    console.log('RE')
    console.log('MI')
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}!`)

}

function repeat(str, numTimes) {
    let result = ''
    for (let i = 0; i < numTimes; i++) {
        result += str
    }
    console.log(result)
}


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y
}

// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {
    let sumArr = 0
    for (let nums of arr) {
        sumArr += nums
    }
    return sumArr
}

function objectEqual(obj1, obj2) {
    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)
}

repeat('hello', 3)