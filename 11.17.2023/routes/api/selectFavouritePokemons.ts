import {Router, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

const router: Router = Router()
const prismaClient = new PrismaClient()

router.get('/', async (req: Request, res: Response)=>{
    const favouritePokemonList = await prismaClient.trainer.findMany({
        select: {
            name: true,
            surname: true,
            FavouritePokemon: {
                select: {
                    name: true,
                    type: true
                }
            }
        }
    })

    res.json(favouritePokemonList)
})

export default router