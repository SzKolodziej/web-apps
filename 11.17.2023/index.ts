import express, {Express, Request, Response, Application} from 'express'
import path from 'path'
import dotenv from 'dotenv'

import homepageRouter from './routes/homepage'
import updateTrainer from './routes/updateTrainer'
import favourites from './routes/favourites'

dotenv.config()
const app: Application = express()
const PORT: string | 3000 = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', homepageRouter)
app.use('/updateTrainer', updateTrainer)
app.use('/favourites', favourites)

app.listen(PORT, ()=>{
    console.log('Working... I think... I don\'t promise anything...')
})