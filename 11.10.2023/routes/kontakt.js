const { Router } = require('express')
const router = Router()
const path = require('path')
const {MongoClient, ServerApiVersion} = require('mongodb')
const password = ""
const url = `mongodb+srv://szymonkolo555:${password}@zsk.hdziy8p.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(url, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

const addFormData = async(formData) =>{
    await client.connect()
    const database = client.db('Project')
    const collection = database.collection('ZSK')

    await collection.insertOne(formData)
}

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/kontakt.html'))
})

router.post('/', async (req, res) => {
    console.log(req.body)

    const {imie, email, select, textarea} = req.body
    const formData = {}
    if(imie){
        formData.imie = imie
    }

    formData.email = email
    formData.select = select
    formData.textarea = textarea

    await addFormData(formData)

    res.redirect('/')
})

module.exports = router;
