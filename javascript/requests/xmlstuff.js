//const req = new XMLHttpRequest();
//
//req.onload = function () {
//    console.log('LOADEDDDD!')
//    const data = JSON.parse(this.responseText)
//    console.log(data.name, data.height)
//}
//req.onerror = function () {
//    console.log('ERRRROR!')
//    console.log(this)
//}
//
//req.open("GET", "https://swapi.dev/api/people/1/")
//req.send()

//fetch("https://swapi.dev/api/people/1/")
//    .then((res) => {
//        console.log('RESOLVED', res)
//        return res.json()
//    })
//    .then((data) => {
//        console.log("JSON DONE", data)
//        return fetch("https://swapi.dev/api/people/2/")
//    })
//    .then((res) => {
//        return res.json()
//    })
//    .then((data) => {
//        console.log('PAGE 2', data)
//    })
//    .catch((e) => {
//        console.log('ERROR!', e)
//    })

const getCharacter = async (url1, url2) => {
    try {
        let page1 = await fetch(url1)
        let page2 = await fetch(url2)
        let data1 = await page1.json()
        let data2 = await page2.json()
        console.log(data1)
        console.log(data2)
    } catch (e) {
        console.log(e)
    }


}
getCharacter("https://swapi.dev/api/people/1/", "https://swapi.dev/api/people/2/")