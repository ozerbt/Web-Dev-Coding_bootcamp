
// let total = 1 + 3;
// console.log("HELLO FROM OUTR FIRST JS FILE!!!", total);
// // Conditionals
// let random = Math.random()
// if (random < 0.5) {
//     console.log('your number is less than 0.5', random);
// } else {
//     console.log('your number is greater than 0.5', random);
// }

// let dayOfWeek = prompt('Enter a letter').toLowerCase();
// let capitalizedFirstLetter = dayOfWeek.slice(0, 1).toUpperCase()
// dayOfWeek = dayOfWeek.replace(dayOfWeek[0], capitalizedFirstLetter)
// console.log(dayOfWeek)

// if (dayOfWeek === 'Monday') {
//     alert('UGHHH I HATE MONDAYS')
// } else if (dayOfWeek === 'Saturday') {
//     console.log('YAY I LOVE SATURDAYS')
// } else if (dayOfWeek === 'Friday') {
//     console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK')
// } else {
//     console.log('MEH')
// }

/*
    0-5 - FREE
    5-10 CHILD $10
    10-65 ADULT $20
    65+ SENIOR $10
*/
// const age = 89;

// if (age < 5) {
//     console.log('you are a baby. you get in for free')
// } else if (age < 10) {
//     console.log("you are a child. You pay $10")
// } else if (age < 65) {
//     console.log('You are an adult you pay $20')
// } else {
//     console.log("you are a senior. You pay $10")
// }

//password must be 6+ characters 
//password cannot include space

// const password = prompt("please enter a new password")

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('valid password')
//     } else {
//         console.log('password cannot contain spaces')
//     }
// } else {
//     console.log("password too short! must be 6+ characters")
// }
// //password cannot include a space

// const input = prompt('Enter Something')

// // if (input) {
// //     console.log("TRUTHY")
// // } else {
// //     console.log("FALSY")
// // }

// if (input) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// const password = prompt("Enter your password")

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('valid password')
// } else {
//     console.log('incorrect format for password')
// }

/*
    0-5 - FREE
    5-10 CHILD $10
    10-65 ADULT $20
    65+ SENIOR FREE
*/
// age = 65
// if ((age < 5 && age > 0) || age >= 65) {
//     console.log('FREE')
// } else if ((age < 10 && age >= 5)) {
//     console.log('$10')
// } else if ((age < 65 && age > 0)) {
//     console.log('$20')
// }

// const firstName = prompt('Enter your first name');
// if (!firstName) {
//     firstName = prompt('try again');
// }

let transportationMethod = "bike"
console.log(transportationMethod)
transportationMethod = transportationMethod.toUpperCase()
console.log(transportationMethod)

