import express, {Express, Request, Response, Application} from 'express'
import path from 'path'
import dotenv from 'dotenv'

import homepageRouter from './routes/homepage'
import updateTrainer from './routes/updateTrainer'
import favourites from './routes/favourites'
import apiRouter from './routes/api'
import badgeRouter from './routes/badges'
import mongoRouter from './routes/mongo'

dotenv.config()
const app: Application = express()
const PORT: string | 3000 = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', homepageRouter)
app.use('/updateTrainer', updateTrainer)
app.use('/favourites', favourites)
app.use('/api', apiRouter)
app.use('/badges', badgeRouter)
app.use('/mongo', mongoRouter)

app.listen(PORT, ()=>{
    console.log('Working... I think... I don\'t promise anything...')
})