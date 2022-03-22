//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const h1 = document.createElement('h1')
h1.append('Look at all my pokemon!')
const newDiv = document.createElement('div')
document.body.append(newDiv)
newDiv.insertAdjacentElement('beforebegin', h1)

for (let i = 1; i <= 150; i++) {
    const div = document.createElement('div')
    div.style.display = 'inline-block'
    const image = document.createElement('img')
    const p = document.createElement('p')
    p.innerText = `${i}`
    p.style.padding = 0;
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    div.append(image, p)
    newDiv.appendChild(div)
}
