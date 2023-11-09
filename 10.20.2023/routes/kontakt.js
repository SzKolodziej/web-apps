const {Router} = require('express')
const router = Router()
const path = require('path')

router.get('/kontakt', (req, res)=>
{
    res.sendFile(path.join(__dirname, '../public/html/kontakt.html'))
})
router.post('/kontakt', (req, res)=>
{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router