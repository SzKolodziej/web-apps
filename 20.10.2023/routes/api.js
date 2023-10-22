const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require("fs/promises");

router.get('/api', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname,'../jsons/api.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

module.exports = router