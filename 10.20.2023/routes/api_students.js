const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require('fs/promises')

router.get('/api/students', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname, '../jsons/students.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

router.get('/api/students/:id', async(req, res)=>
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

module.exports = router