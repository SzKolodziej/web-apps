import {Router, Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
import path from 'path'

const prismaClient: PrismaClient = new PrismaClient()
const router: Router = Router()

router.get('/', (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, '../public/html/homepage.html'))
})

router.post('/', async (req: Request, res: Response)=>{
    const {name, surname, selectStarter} = req.body
    try {
        const starterId = await prismaClient.starters.findFirst({
            where: {name: selectStarter},
            select: {id: true}
        })

        if(starterId != null){
            const trainerData = {
                name: name,
                surname: surname,
                StarterId: starterId.id
            }

            try{
                await prismaClient.trainer.create({
                    data: trainerData
                })
            }
            catch (error){
                console.error('Error creating new Trainer: ', error)
                res.status(500).json({error: 'Internal server error'})
            }
        }
        else{
            console.error('starterId not found')
            res.status(500).json({error: 'Internal sever error'})
        }

    }
    catch(error){
        console.error('Error selecting starterId: ', error)
        res.status(500).json({error: 'Internal server error'})
    }

    res.redirect('/')
})

export default router