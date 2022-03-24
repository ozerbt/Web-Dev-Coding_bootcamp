const express = require('express')

const app = express()

//app.use((req, res) => {
//    console.log("WE GOT A NEW REQUEST!!")
//    //res.send("HELLO WE GOUT YOUR REQUEST THIS IS A RESPONSE")
//    res.send('<h1>This is my webpage!</h1>')
//})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params
    console.log(subreddit, postId)
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    console.log(subreddit)
    res.send(`<h1>you are on the ${subreddit} subreddit</h1>`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send(`<h1> Nothing found if nothing searched</h1>`)
    }
    res.send(`<h1> Search results for ${q}</h1>`)
})

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

// /r/SOMETHINGHERE



app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})