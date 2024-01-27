import {Router, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

import selectTrainers from './api/selectTrainers'
import selectFavouritePokemons from './api/selectFavouritePokemons'
import selectTrainersBadges from './api/selectTrainersBadges'

const prismaClient = new PrismaClient()
const router: Router = Router()

const json = {
    './api/trainers': 'see trainers list',
    './api/favouritePokemons': 'see trainers and their favourite Pokemon',
    './api/badges': 'see trainer\'s badges',
}

router.get('/', (req: Request, res: Response)=>{
    res.json(json)
})

router.use('/trainers', selectTrainers)
router.use('/favouritePokemons', selectFavouritePokemons)
router.use('/badges', selectTrainersBadges)

export default router