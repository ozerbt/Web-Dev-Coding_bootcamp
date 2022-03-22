let farm = ['chicken', 'sheep', 'horse', 'dog', 'cow']

farm[0] = 'Chicken'

farm.length

farm[5] = 'owner'

let animals = ['cat', 'pigeons']

let farmUpdate = farm.concat(animals)

farmUpdate.shift()
farmUpdate.unshift('chicken')
farmUpdate.pop()
farmUpdate.push('birds')

let house = "modern 2 story"
let randomString = "hello"
let reversedString = randomString.split('').reverse().join('')
const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const doubles = numbers.map(function (num) {
    return num * 2;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const movieTitles = movies.map((movie) => {
    return movie.title
})