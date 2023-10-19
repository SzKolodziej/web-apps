const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>
{
    res.sendFile(path.join(__dirname, 'public/html/homepage.html'))
})

app.get('/kontakt', (req, res)=>
{
    res.sendFile(path.join(__dirname, '/public/html/kontakt.html'))
})


app.listen('3000', '127.0.0.1',()=>
{
    console.log("Working.... I think..")
})