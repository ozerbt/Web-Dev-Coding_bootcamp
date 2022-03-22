const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let catName = input.value
    const ul = document.querySelector('#cats')
    const li = document.createElement('li')
    li.append(catName)
    ul.append(li)
    input.value = ''
})