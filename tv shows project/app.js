const form = document.querySelector('#searchForm')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    let res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            let img = document.createElement('img')
            img.src = result.show.image.medium
            form.insertAdjacentElement('afterend', img)
        }
    }
}

String.prototype.yell = function () {
    return `OMG ${this.toUpperCase()}!!!! AGHGHGHG`
}

Array.prototype.pop = function () {
    return "SORRY I WANT THAT ELEMENT"
}