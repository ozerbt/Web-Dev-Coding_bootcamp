const express = require('express')

const app = express()

//app.use((req, res) => {
//    console.log("WE GOT A NEW REQUEST!!")
//    //res.send("HELLO WE GOUT YOUR REQUEST THIS IS A RESPONSE")
//    res.send('<h1>This is my webpage!</h1>')
//})
app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO CATS THIS IS A DIFFERENT RESPONSE')
})

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE')
})

app.get('/cats', (req, res) => {
    console.log("Cat Request")
    res.send('MEOW!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOOF!')
})

app.get('*', (req, res) => {
    res.send(`I dont know that route`)
})

// / cats => 'meow'
// /dogs => 'wolf'
// '/' => home page



app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})