const express = require('express')
const app = express()
const path = require('path')
const homepageRouter = require('./routes/homepage')
const kontaktRouter = require('./routes/kontakt')
const apiRouter = require('./routes/api')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))

app.use('/', homepageRouter)
app.use('/kontakt', kontaktRouter)
app.use('/api', apiRouter)

app.listen(3000, '127.0.0.1',()=>
{
    console.log("Working.... I think..")
})