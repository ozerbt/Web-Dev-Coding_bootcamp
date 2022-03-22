
//setTimeout(() => {
//    document.body.style.backgroundColor = 'red'
//    setTimeout(() => {
//        document.body.style.backgroundColor = 'orange'
//        setTimeout(() => {
//            document.body.style.backgroundColor = 'yellow'
//            setTimeout(() => {
//                document.body.style.backgroundColor = 'green'
//                setTimeout(() => {
//                    document.body.style.backgroundColor = 'blue'
//                }, 1000)
//            }, 1000)
//        }, 1000)
//    }, 1000)
//
//}, 1000)

//Callbacks are in basic ELI5 terms, functions that run AFTER a given parameter is ran. i functional hieracrchy. Think of the call stack where the top most function in the stack is ran then when that function is returned the second function is ran. 

//const delayedColorChange = (newColor, delay, doNext) => {
//    setTimeout(() => {
//        document.body.style.backgroundColor = newColor
//        doNext && doNext();
//    }, delay)
//}

//delayedColorChange('green', 3000, () => {
//    delayedColorChange('orange', 3000)
//})
//
//getRandomBooks(books, () => {
//    uploadBooksToDB(books, () => {
//
//    }, () => {
//
//    })
//})

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor
            resolve()
        }, delay)
    })
}

delayedColorChange('green', 1000)
    .then(() => {
        return delayedColorChange('yellow', 1000)
    })
    .then(() => {
        return delayedColorChange('red', 1000)
    })
    .then(() => {
        return delayedColorChange('orange', 1000)
    })
    .then(() => {
        return delayedColorChange('blue', 1000)
    })