// Get the sum of two arrays…actually the sum of all their elements.
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// arrTotal1 = 0;
// arrTotal2 = 0;
// for (let nums of arr_1) {
//     arrTotal1 += nums
// };
// for (let nums of arr_2) {
//     arrTotal2 += nums
// }
// arrTotal = arrTotal1 + arrTotal2
// console.log(arrTotal)

//Using a for loop output the elements in reverse order
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for (i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }

// //Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// let summedArray = []

// // for (i = 0; i < arr_3.length; i++) {
// //     summedArray.push(arr_3[i] + arr_4[i])
// // }

let str1 = "javascript";

let str2 = '';

for (i = 0; i < str1.length; i++) {
    if (i % 2 == 0) {
        str2 = str1.replace(str1[i], 'Z')
    }
}
console.log(str2)

