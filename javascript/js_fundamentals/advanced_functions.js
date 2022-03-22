
// let totalEggs = 0
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs)
// // collectEggs()
// // console.log(totalEggs)
// let bird = 'Scarlet Macaw'

// function birdWatch() {
//     let bird = "Great Blue Heron";
//     console.log(bird)

// }
// birdWatch()
// console.log(bird)

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159
//     let msg = 'HIII!'
// }
// console.log(radius)
// console.log(PI)
// for(i=0; i < 5; i++){
//     let msg = 'sdfs';
// }

// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Balck Panther']
//     function cryForHelp() {
//         function inner() {

//             for (let hero of heroes) {
//                 console.log(`PLEASE HELP ME, ${hero.toUpperCase()}`)
//             }
//         }
//         inner()
//     }
//     cryForHelp()
// }
// bankRobbery()

// function add(x, y) {
//     return x + y
// }


// const add = function (x, y) {
//     return x + y
// }

// const PI = 3.14;
// add(3, 5)
// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }
// callTwice(rollDie)

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('CONGRATS I AM A GOOD FUNCTION!')
        }
    } else {
        return function () {
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS')
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS')
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS')
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS')
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS')
        }
    }

}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

console.log(makeBetweenFunc(50, 100))

function isBetween(num) {
    return num >= 1 && num <= 10
}
//higher order function example. have a function that takes in an empty array as a parameter and adds x amount of indexes
function numOfIndexes(num) {
    let arr = []
    for (i = 0; i < num; i++) {
        arr.push(null)
    }
    console.log(arr)
    return function (setValue) {
        for (i = 0; i < arr.length; i++) {
            arr[i] = setValue
        }
        return arr
    }
}
let newDupArr = numOfIndexes(5)
let newArr = newDupArr('hello')
console.log(newArr)
//function as an argument example. Make a function that takes in an object and