//axios.get("https://swapi.dev/api/people/1/")
//    .then((res) => {
//        console.log(res)
//    })
//    .catch((e) => {
//        console.log(e)
//    })

//const getCharacter = async (id) => {
//    try {
//        let res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//        console.log(res.data)
//    } catch (e) {
//        console.log(e)
//    }
//
//}
//getCharacter(4)
//getCharacter(10)
const button = document.querySelector('button')
const ul = document.querySelector('#jokes')

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com', config)
        return res.data.joke
    } catch {
        return 'no jokes available sorry'
    }

}

button.addEventListener('click', async () => {
    let joke = await getDadJoke()
    const li = document.createElement('li')
    li.append(joke)
    ul.append(li)
})
ul.addEventListener('click', (e) => {
    if (e.target === 'li') {
        e.target.hidden = true
    }

})

