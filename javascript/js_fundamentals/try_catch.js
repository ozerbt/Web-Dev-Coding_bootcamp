
// try {
//     hello.toUpperCase()
// } catch {
//     console.log('ERROROROR')
// }
// console.log('AFTER')


function yell(msg) {
    try {

        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log(e)
        console.log('please pass a string')
    }
}