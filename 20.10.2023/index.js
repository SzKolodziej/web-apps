const express = require('express')
const app = express()
const path = require('path')
const stream = require('stream')
const homepagerouter = require()

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>
{
    res.sendFile(path.join(__dirname, 'public/html/homepage.html'))
})

app.get('/kontakt', (req, res)=>
{
    res.sendFile(path.join(__dirname, '/public/html/kontakt.html'))
})

app.post('/kontakt', (req, res)=>
{
    console.log(req.body)
    res.redirect('/')
})


app.get('/api', (req, res)=>
{
    const json_api = {
        "students": {
            "url": "api/students",
            "description": "Lista uczniów"
        },
        "subjects": {
            "url": "api/subjects",
            "description": "Lista przedmiotów"
        }
    }

    res.json(json_api)
})

app.get('/api/students', (req, res)=>
{

})

app.listen('3000', '127.0.0.1',()=>
{
    console.log("Working.... I think..")
})