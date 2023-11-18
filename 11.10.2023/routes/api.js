const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require("fs/promises")
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

const getMessages = async ()=>{
    await client.connect()
    const database = client.db('Project')
    const collection = database.collection('ZSK')

    const message = await collection.find().toArray()
    return message
}

router.get('/', async (req, res)=>{
    res.json(await getMessages())
})

module.exports = router
