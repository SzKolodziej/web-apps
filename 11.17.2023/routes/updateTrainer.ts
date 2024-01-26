import {Router, Request, Response} from 'express'
import path from 'path'
import {PrismaClient} from '@prisma/client'

const prismaClient: PrismaClient = new PrismaClient()
const router: Router = Router()

const selectTrainerId = async (trainerId: number)=>{
    return prismaClient.trainer.findFirst({
        where: {id: Number(trainerId)},
        select: {id: true}
    })
}

router.get('/', (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, '../public/html/updateTrainer.html'))
})

router.post('/update', async (req: Request, res: Response)=>{
    const {trainerId, newName, newSurname} = req.body

    if(isNaN(trainerId) || !Number.isInteger(Number(trainerId))){
        res.status(500).json({error: 'Id is not a number or integer'})
        return
    }

    try{
        const id = await selectTrainerId(trainerId)

        if(id != null){
            if(newName.trim().length>0){
                try {
                    await prismaClient.trainer.update({
                        where: {id: id.id},
                        data: {name: newName}
                    })
                }
                catch (error){
                    console.error('Error updating trainer name: ', error)
                    res.status(500).json({error: 'Internal server error'})
                }
            }
            if(newSurname.trim().length>0){
                try {
                    await prismaClient.trainer.update({
                        where: {id: id.id},
                        data: {surname: newSurname}
                    })
                }
                catch (error){
                    console.error('Error updating trainer surname: ', error)
                    res.status(500).json({error: 'Internal server error'})
                }
            }
        }
        else{
            res.status(404).json({error: 'Id not found'})
            return
        }
    }
    catch (error){
        console.error('Error selecting trainerId: ', error)
        res.status(500).json({error: 'Internal server error'})
    }

    res.redirect('/updateTrainer')
})

router.post('/delete', async (req: Request, res: Response)=>{
    const {trainerId} = req.body

    if(isNaN(trainerId) || !Number.isInteger(Number(trainerId))){
        res.status(500).json({error: 'Id is not a number or integer'})
        return
    }

    try{
        const id = await selectTrainerId(trainerId)

        if(id != null){
            await prismaClient.trainer.delete({
                where: {id: id.id}
            })
        }
        else{
            res.status(404).json({error: 'Id not found'})
            return
        }

    }
    catch (error){
        console.error('Error selecting trainerId: ', error)
        res.status(500).json({error: 'Internal server error'})
    }

    res.redirect('/updateTrainer')
})

export default router