const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const doubles = numbers.map(function (num) {
    return num * 2
})


// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })
// // for (let el of numbers) {
// //     console.log(el)
// // }
const movies = [{
    title: 'Amadeus',
    score: 99,
    year: 2013
},
{
    title: 'Stand By Me',
    score: 85,
    year: 1965
},
{
    title: 'Parasite',
    score: 95,
    year: 1950
},
{
    title: 'Alien',
    score: 90,
    year: 2010
},
{
    title: 'Joker',
    score: 30,
    year: 2017
},
{
    title: 'Pokemon',
    score: 50,
    year: 1998
}]
movies.some((movie) => {
    return movie.year > 2015
})
const goodMovies = movies.filter(movie => movie.score > 80)
const goodTitles = goodMovies.map(m => m.title)
movies.filter(m => m.score > 80).map(m => m.title)
const badMovies = movies.filter(movie => movie.score < 70)
const recentMovies = movies.filter(movie => movie.year > 1999)
// const movieTitles = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })
const movieTitles = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`)
)
// movies.forEach(function (element) {
//     console.log(`${element.title} - ${element.score}/100`)
// })

//Take an array of numbers and make them strings
numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function stringItUp(arr) {
    const stringNum = arr.map(function (num) {
        return num.toString()
    })
    return stringNum
}

namesArr = ['john', 'blake', 'BoB', 'BiLLY', 'hUbert']

function capitalizedNames(arr) {
    const capitalizedNames = arr.map(function (name) {
        let chars = name.toLowerCase().split('');
        chars[0] = chars[0].toUpperCase()
        return chars.join('')
    })
    return capitalizedNames
}

const makeStrings = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
function checkAge(arr) {
    const newList = arr.map((obj) => {
        let guestArray = []
        if (obj.age < 18) {
            let underage = `${obj.name} is under age!!`
            guestArray.push(underage)
        } else {
            let goodToGo = `${obj.name} can go to The Matrix`
            guestArray.push(goodToGo)
        }
        return guestArray
    })
    return newList
}

// const add = function (x, y) {
//     return x + y
// }

const add = (x, y) => x + y

const square = x => {
    return x * x
}

// const rollDie = () => Math.floor(Math.random() * 6) + 1

function reverseNum(num) {
    let strNum = num.toString().split('')
    let reversedNum = strNum.reverse().join('')
    return parseInt(reversedNum)
}
function alphabetOrder(str) {
    let strArr = str.split('')
    strArr.sort()
    return strArr
}
function capitilizeFirstLetter(str) {
    let newArr = []
    let strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        newArr.push(strArr[i].replace(strArr[i][0], strArr[i][0].toUpperCase()))
    }
    let completedStr = newArr.join(' ')
    return completedStr
}

numbers.filter(n => {
    return n < 10
})

const validUserNames = (strArr) => {
    const validNames = strArr.filter(name => {
        name.toString()
        if (name.length <= 10) {
            return name
        }
    })
}

const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

exams.some((score) => {
    return score >= 75
})

// let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// function kayla(badoinkSize) {
//     let badoinkArr = badoinkSize.split('')
//     let totalBadoinkSize = 0
//     for (i = 0; i < badoinkArr.length; i++) {
//         totalBadoinkSize += badoinkArr[i].charCodeAt()
//     }
//     if (totalBadoinkSize >= 'JUICY'.charCodeAt()) {
//         for (let i = 0; i < daysOfWeek.length; i++) {
//             console.log(`${daysOfWeek[i]} is reserved for Kaylas ${badoinkSize} badoink`)
//         }
//     } else {

//         console.log('youre not Kayla')
//     }

// }
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0
// for (let price of prices) {
//     total += price
// }
// const total = prices.reduce((total, price) => (total * price))

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min
})

const highestRated = movies.reduce((currentHighestMovie, movie) => {
    if (movie.score > currentHighestMovie.score) {
        return movie
    }
    return currentHighestMovie
})
const evens = [2, 4, 6, 8]
evens.reduce((currentVal, newVal) => {
    return currentVal + newVal
}, 40)

// let voters = [
//     { name: 'Bob', age: 30, voted: true },
//     { name: 'Jake', age: 32, voted: true },
//     { name: 'Kate', age: 25, voted: false },
//     { name: 'Sam', age: 20, voted: false },
//     { name: 'Phil', age: 21, voted: true },
//     { name: 'Ed', age: 55, voted: true },
//     { name: 'Tami', age: 54, voted: true },
//     { name: 'Mary', age: 31, voted: false },
//     { name: 'Becky', age: 43, voted: false },
//     { name: 'Joey', age: 41, voted: true },
//     { name: 'Jeff', age: 30, voted: true },
//     { name: 'Zack', age: 19, voted: false }
// ];

// let voterSum = 0;
// voters.reduce((previousVal, currentVal) => {
//     return previousVal + currentVal.age

// })

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortenson',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this.fullName())
//         }, 3000)
//     }
// }

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// function greet(person, msg = 'hey there!', punc = '!') {
//     return `${msg}, ${person}`
// }

const nums = [134, 4, 5, 6, 32123, 4, 45, 3, 3455346, 234, 2345]
console.log(...nums)
const hi = 'hello'

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs]

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Canine' }
const catDog = { ...feline, ...canine }

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

function sum(...nums) {
    return nums.reduce((num, nums) => {
        return num + nums
    })
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`GOLD MEDAL GOES TO: ${silver}`)
    console.log(`GOLD MEDAL GOES TO: ${everyoneElse}`)
}

const scores = [234234, 345, 6546, 21342134, 12312354, 2342354, 23423, 235235, 2355, 566545]

const highScore = scores[0]

const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'harvery@gmail.com',
    password: 'lolxdlmao123',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the firs topenly...',
    city: 'San Francisco',
    state: 'California',
    jobs: {
        technician: 75000,
        politician: 100000
    }
}

const user2 = {
    email: 'efsdy@gmail.com',
    password: 'losdddao123',
    firstName: 'Billy',
    lastName: 'cosby',
    born: 1930,
}
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { firstName, email, password } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const { city, state, died } = user2

// // function fullName(user) {
// //     const { firstName, lastName } = user
// //     return `${firstName} ${lastName}`
// // }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

// movies.filter(({ score }) => {
//     return score >= 80
// })

const newMovie = movies.map(({ title, score, year }) => {
    return `${title}, ${year}, ${score}`
})