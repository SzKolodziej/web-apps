import {Router, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

const prismaClient = new PrismaClient()
const router: Router = Router()

router.get('/', async(req: Request, res: Response)=>{
    const trainersList = await prismaClient.trainer.findMany()

    res.json(trainersList)
})

export default router