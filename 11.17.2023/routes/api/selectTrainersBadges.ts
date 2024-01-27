import {Router, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

const prismaClient = new PrismaClient()
const router: Router = Router()

router.get('/', async (req: Request, res: Response)=>{
    const traiersbadges = await prismaClient.trainer.findMany({
        select: {
            name: true,
            surname: true,
            TrainersBadges: {
                select: {
                    Badge:{
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    })
    //doesn't it look beautiful?

    res.json(traiersbadges)
})

export default router