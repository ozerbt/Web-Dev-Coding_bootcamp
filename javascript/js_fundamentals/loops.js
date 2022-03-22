// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
// }
//the let i is where you declare the variable i nside the for loop and its very common to decalre it as I. the middle part of the for loop is the condition that you set and if the condition is true you define a increment value until the boolean is returned as false.
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }
// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i)
// }


const animals = [
    'Aardvark',
    'Abyssinian',
    'Addax',
    'Adelie Penguin',
    'Affenpinscher',
    'Afghan Hound',
    'African Bullfrog',
    'African Bush Elephant',
    'African Civet',
    'African Clawed Frog',
    'African Forest Elephant',
    'African Palm Civet',
    'African Penguin',
    'African Tree Toad',
    'African Wild Dog',
    'Aidi',
    'Ainu',
    'Airedale Terrier',
    'Airedoodle',
    'Akbash',
    'Akita',
    'Akita Shepherd',
    'Alabai',
    'Alaskan Husky',
    'Alaskan Klee Kai',
    'Alaskan Malamute',
    'Alaskan Shepherd',
    'Albacore Tuna',
    'Albatross',
    'Aldabra Giant Tortoise',
    'Alligator',
    'Alligator Gar',
    'Alpaca',
    'Alpine Dachsbracke',
    'Alpine Goat',
    'Alusky',
    'Amazon River Dolphin (Pink Dolphin)',
    'American Alsatian',
    'American Bulldog',
    'American Cocker Spaniel',
    'American Cockroach',
    'American Coonhound',
    'American Eskimo Dog',
    'American Foxhound',
    'American Hairless Terrier',
    'American Leopard Hound',
    'American Pit Bull Terrier',
    'American Pygmy Goat',
    'American Robin',
    'American Staffordshire Terrier',
    'American Toad',
    'American Water Spaniel',
    'Amur Leopard',
    'Anatolian Shepherd Dog',
    'Anchovies',
    'Angelfish',
    'Anglerfish',
    'Angora Goat',
    'Ant',
    'Antarctic scale worm',
    'Anteater',
    'Antelope',
    'Appenzeller Dog',
    'Apple Head Chihuahua',
    'Arapaima',
    'Arctic Fox',
    'Arctic Hare',
    'Arctic Wolf',
    'Arizona Bark Scorpion',
    'Armadillo',
    'Armyworm',
    'Asian Elephant',
    'Asian Giant Hornet',
    'Asian Palm Civet',
    'Asiatic Black Bear',
    'Aurochs',
    'Aussiedoodle',
    'Aussiedor',
    'Australian Bulldog',
    'Australian Cattle Dog',
    'Australian Gecko',
    'Australian Kelpie Dog',
    'Australian Labradoodle',
    'Australian Mist',
    'Australian Retriever',
    'Australian Shepherd',
    'Australian Terrier',
    'Avocet',
    'Axolotl',
    'Aye Aye'
]
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }
// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i])
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`      j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i]
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }

// }
// // /Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i, 'even')
//     } else {
//         console.log(i, 'odd')
//     }

// }
// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

// for (i = 1; i < 2; i++) {
//     console.log('*')
//     for (j = 1; j < 2; j++) {
//         console.log('**')
//         for (k = 1; k < 2; k++) {
//             console.log('***')
//             for (l = 1; l < 2; l++) {
//                 console.log('****')
//                 for (m = 1; m < 2; m++) {
//                     console.log('*****')
//                 }
//             }
//         }
//     }
// }
//-------------------WHILE LOOPS----------------------//
// let count = 0
// while (count <= 10) {
//     console.log(count)
//     count++
// }

// while(!gameOver){
//     //player 1 move
//     //player 2 move
// }

// const secret = 'babyHippo';

// let guess = prompt("enter the secret code...")
// while (guess !== secret) {
//     guess = prompt("enter the secret code...")
// }
// console.log('congrats you got the secret!')


// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input)
//     if (input.toLowerCase() === 'stop copying me') break;
// }
// console.log('ok you win')

// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

// let maximum = parseInt(prompt("enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("enter a valid number!"));
// }
// let guesses = 0
// const targetNum = Math.floor(Math.random() * maximum) + 1
// console.log(targetNum);

// let guess = parseInt(prompt("enter your first guess!"));
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     guesses++
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:")
//     }
//     else {
//         guess = prompt("Too low! Enter a new guess:")
//     }
// }
// if (guess === 'q') {
//     console.log('ok you quit')
// }
// console.log(`You got it! It took you ${guesses + 1} guesses`)

// const subreddits = ['cringe', 'books', 'funny', 'chickens', 'soccer', 'pics', 'dankmemes', 'battlefield', 'idiotsincars']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }
// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }

// for (let char of 'hello world') {
//     console.log(char)
// }
const testScores = {
    david: 80,
    alex: 40,
    blake: 30,
    josh: 90,
    sarah: 85,
    miranda: 87
}
// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }
let total = 0
let scores = Object.values(testScores);
for (let score of scores) {
    total += score
}
console.log(total / scores.length)