const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}


const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//fakeRequestPromise('yelp.com/api/coffee/page1')
//    .then(() => {
//        console.log("PROMISE RESOLVED")
//        console.log("IT WORKED")
//        fakeRequestPromise('yelp.com/api/coffee/page2')
//            .then(() => {
//                console.log('PROMISE RESOLVED (2)')
//                fakeRequestPromise('yelp.com/api/coffee/page3')
//                    .then(() => {
//                        console.log("PROMISE RESOLVED (3)")
//                    })
//            })
//            .catch(() => {
//                console.log('PROMISE REJECTED (2)')
//            })
//    })
//    .catch(() => {
//        console.log("PROMISE REJECTED")
//        console.log('OH NO ERROR')
//    })
//
//makeRequest(() => {
//
//}, () => {
//
//})

//fakeRequestCallback('books.com/page1',
//    (response) => {
//        console.log("IT WORKED!!!!")
//        console.log(response)
//        fakeRequestCallback('books.com/page2',
//            (response) => {
//                console.log("IT WORKED AGAIN!!!!")
//                console.log(response)
//                fakeRequestCallback('books.com/page3',
//                    (response) => {
//                        console.log(response)
//                    },
//                    (err) => { console.log(err) })
//            },
//            (err) => {
//                console.log("err", err)
//            })
//    },
//    () => {
//        console.log('ERROR', err)
//    })

fakeRequestPromise('yelp.com/apo/coffee/page1')
    .then((data) => {
        console.log('IT WORKEDDD@!!!!! (PAGE1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')

    })
    .then((data) => {
        console.log('IT WORKEDDDD!!! (PAGE 2)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('IT WORKEDDDD!!! (PAGE 3)')
        console.log(data)
    })
    .catch(() => {
        console.log('OH NO A REQUEST FAIELD!!!')
    })