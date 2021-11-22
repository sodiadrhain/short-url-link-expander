const express = require('express')
const request = require('request')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.get('/expand', (req, res) => {
    let shortUrl = req.query.shortUrl
    // If the short URL does not contain https:// add it
    // e.g example.com becomes https://example.com
    if (!shortUrl.startsWith('http')) shortUrl = 'https://' + shortUrl
    request({
        url: shortUrl,
        method: 'HEAD',
        followAllRedirects: true
    },
    (err, response, body) => {
        if (err) {
            console.log(err)
            res.send('An error occured try again')
        } else {
            // Sends full URL back
            res.send(response.request.href)
        }
    })
})

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
})