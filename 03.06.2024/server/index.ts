import express, {Express, Request, Response, Application} from "express";
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
const app: Application = express()
const PORT: string | 3000 = process.env.PORT || 3000

app.get('/', (req: Request, res: Response)=>{
    console.log('jupijej')
    res.json({witom: 'witom'})
})

app.listen(PORT, ()=>{
    console.log(`Working on port ${PORT}`)
})