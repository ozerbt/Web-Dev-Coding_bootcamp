const btn = document.querySelector('#color')
const h1 = document.querySelector('h1')



btn.addEventListener('click', ()=>{
    const randRgb = randomColor()
    document.body.style.backgroundColor = randRgb 
    h1.innerHTML = randRgb
})

const randomColor = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255) 
    let b = Math.floor(Math.random() * 255)
    return randRgb = `rgb(${r},${g},${b})`
}