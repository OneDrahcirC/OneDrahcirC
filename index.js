const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//app.use(express.static('public'))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public', 'index.html'))
})

app.get('/', (req, res) => {
    res.send('Received a post request!')
  })
  
app.get('/Welcome', (req, res) => {
    res.send('Welcome to the serverside of my app!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
