// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


// const h1 = document.createElement('h1')
// h1.append('Look at all my pokemon!')
// const newDiv = document.createElement('div')
// document.body.append(newDiv)
// newDiv.insertAdjacentElement('beforebegin', h1)


// for (let i = 1; i < 151; i++) {
//     const childDiv = document.createElement('div')
//     childDiv.style.display = 'inline-block'
//     const p = document.createElement('p')
//     const image = document.createElement('img')
//     p.innerText = `${i}`
//     image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     newDiv.appendChild(childDiv)
//     childDiv.appendChild(p)
//     childDiv.appendChild(image)
// }

//return names from object 

names = [
    { a: 1 },
    { name: 'Jane' },
    {},
    { name: "Mark" },
    { name: "Sophia" },
    { b: 2 }
]


function getNames(arrObj) {
    let objectName = []
    let names = []
    for (let obj of arrObj) {
        if (obj.name) {
            objectName.push(obj)
        }
    }
    for (let obj2 of objectName) {
        names.push(obj2.name)
    }

    return names

}

console.log(getNames(names))

// return index of largest value of the array
let nums = [1, 2, 4, 5, 234, 1, 34, 453, 123, 32456, 123, 2345, 123, 12, 42345, 123, 23, 5, 1234, 2435, 12354, 235, 236, 346]

function largestIndex(arr) {
    const total = arr.reduce((previousVal, currentVal) => {
        console.log(arr)
        console.log(`previous ${previousVal}    current ${currentVal}`)
        if (currentVal > previousVal) {
            return arr.indexOf(currentVal)
        } else {
            return previousVal
        }

    })
    return total
}
console.log(largestIndex(nums))