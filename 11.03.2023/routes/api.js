const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require("fs/promises")
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

router.get('/', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname,'../jsons/api.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

//api students
router.get('/students', async(req, res)=>
{
    const students = await prisma.students.findMany()
    res.json(students)
})

router.get('/students/:id', async(req, res)=>
{
    const id = parseInt(req.params.id)
    const student = await prisma.students.findUnique({
        where: {id: id}
    })

    if(!student)
    {
        res.status(404).json({error: 'Student not found'})
    }
    else
    {
        res.json(student)
    }
})

//api subjects
router.get('/subjects', async(req, res)=>
{
    const subjects = await prisma.subjects.findMany()
    res.json(subjects)
})

router.get('/subjects/:id', async(req, res)=>
{
    const id = parseInt(req.params.id)
    const subject = await prisma.subjects.findUnique({
        where: {id: id}
    })

    if(!subject)
    {
        res.status(404).json({error: 'Subject not found'})
    }
    else
    {
        res.json(subject)
    }
})

module.exports = router