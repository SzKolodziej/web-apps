const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require('fs/promises')

router.get('/api/subjects', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname, '../jsons/subjects.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

router.get('/api/subjects/:id', async(req, res)=>
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