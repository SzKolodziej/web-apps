import path from 'path'
import {Router, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

const prismaClient = new PrismaClient()
const router: Router = Router()


router.get('/', (req: Request, res:Response)=>{
    res.sendFile(path.join(__dirname, '../public/html/badges.html'))
})

router.post('/', async(req: Request, res: Response)=>{
    const {trainerId, badges} = req.body

    try{
        const tid = await prismaClient.trainer.findFirst({
            where: {id: Number(trainerId)}
        })

        if(tid != null){
            try{
                const trainerbadge = await prismaClient.trainersBadges.findFirst({
                    where:{
                        BadgeId: Number(badges),
                        TrainerId: Number(trainerId)
                    }
                })

                if(trainerbadge==null){
                    await prismaClient.trainersBadges.create({
                        data: {
                            TrainerId: Number(trainerId),
                            BadgeId: Number(badges)
                        }
                    })
                }
            }
            catch(error){
                console.error('Error selecting in trainersBadges: ', error)
                res.status(500).json({error: 'Internal server error'})
            }
        }
        else{
            res.status(404).json({error: 'TrainerId not found'})
            return
        }
    }
    catch(error){
        console.error('Error selecting trainerId: ', error)
        res.status(500).json({error: 'TrainerId not found'})
        return
    }

    res.redirect('/badges')
})

export default router