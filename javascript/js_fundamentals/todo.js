let todoArray = [];

let input = prompt('What would you like to do?')
while (input !== 'quit') {
    if (input === 'new') {
        input = prompt('type below what youd like to add')
        todoArray.push(input)
        console.log(`${input} has been added`)
    } else if (input === 'list') {
        console.log('here are your items so far:')
        for (let items of todoArray) {
            console.log(items)
        }
        input = prompt('what would you like to do next')
    } else if (input === 'delete') {
        input = parseInt(prompt('what index would you like to delete?'))
        todoArray.splice(input, 1)
        input = prompt('what would you like to do next')
    }
    else {
        input = prompt('what would you like to do next')
    }
}