import {Router, Request, Response} from 'express'
import path from 'path'
import {MongoClient, ServerApiVersion} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const router: Router = Router()
const URL: string | undefined = process.env.URL

if(URL != undefined){
    const client = new MongoClient(URL, {
        serverApi:{
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    })

    const addFormData = async(formData: {})=>{
        await client.connect()
        const database = client.db('crud')
        const collection = database.collection('Cluster0')

        await collection.insertOne(formData)
    }

    router.get('/', (req: Request, res: Response)=>{
        res.sendFile(path.join(__dirname, '../public/html/mongo.html'))
    })

    router.post('/', async (req: Request, res: Response)=>{
        const {name, surname, age} = req.body

        const formData = {
            name: name,
            surname: surname,
            age: age
        }

        await addFormData(formData)

        res.redirect('/mongo')
    })
}
else{
    router.get('/', (req: Request, res: Response)=>{
        res.status(500).json({error: 'Internal server error'})
    })
}

export default router