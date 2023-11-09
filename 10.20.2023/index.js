const express = require('express')
const app = express()
const homepageRouter = require('./routes/homepage')
const kontaktRouter = require('./routes/kontakt')
const apiRouter = require('./routes/api')
const apiStudentsRouter = require('./routes/api_students')
const apiSubjectsRouter = require('./routes/api_subjects')

//app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static('./public/css', { 'extensions': ['css'] }));
app.use(express.urlencoded({extended: true}))

app.use('/', homepageRouter)
app.get('/kontakt', kontaktRouter)
app.post('/kontakt', kontaktRouter)
app.get('/api', apiRouter)
app.get('/api/students', apiStudentsRouter)
app.get('/api/students/:id', apiStudentsRouter)
app.get('/api/subjects', apiSubjectsRouter)
app.get('/api/subjects/:id', apiSubjectsRouter)

app.listen(3000, '127.0.0.1',()=>
{
    console.log("Working.... I think..")
})