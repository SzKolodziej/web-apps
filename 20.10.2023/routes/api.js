const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require("fs/promises");

router.get('/', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname,'../jsons/api.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

//api students
router.get('/students', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname, '../jsons/students.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

router.get('/students/:id', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname, '../jsons/students.json'))
    jsonData = JSON.parse(jsonData)
    const studentID = parseInt(req.params.id)
    const student = jsonData.find(student => student.id === studentID)

    if(student)
    {
        res.json(student)
    }
    else
    {
        res.status(404).json({error: 'Student not found'})
    }
})

//api subjects
router.get('/subjects', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname, '../jsons/subjects.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

router.get('/subjects/:id', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname, '../jsons/subjects.json'))
    jsonData = JSON.parse(jsonData)
    const subjectID = parseInt(req.params.id)
    const subject = jsonData.find(subject => subject.id === subjectID)

    if(subject)
    {
        res.json(subject)
    }
    else
    {
        res.status(404).json({error: 'Subject not found'})
    }
})

module.exports = router