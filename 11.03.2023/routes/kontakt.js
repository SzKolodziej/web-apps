const { Router } = require('express')
const router = Router()
const path = require('path')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/kontakt.html'))
})

router.post('/', async (req, res) => {
        console.log(req.body)

        const formData = {
            name: req.body.imie,
            email: req.body.email,
            select_box: req.body.select,
            textarea: req.body.textarea,
        }

        await prisma.form.create({
            data: formData,
        })

        res.redirect('/')
})

module.exports = router;
