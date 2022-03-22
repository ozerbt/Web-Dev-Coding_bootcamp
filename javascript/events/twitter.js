const form = document.querySelector('form')
const tweetName = document.querySelector('#tweet_name')
const tweet = document.querySelector('#tweet')
const list = document.querySelector('ul')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const tweetLI = document.createElement('li')
    tweetLI.append(`${tweetName.value}- ${tweet.value}`)
    list.append(tweetLI)
})

list.addEventListener('click', (e) => {
    e.target.nodeName == 'LI' && e.target.remove()
})