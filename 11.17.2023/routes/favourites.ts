import {Router, Request, Response} from 'express'
import path from 'path'
import {PrismaClient} from '@prisma/client'

const prismaClient: PrismaClient = new PrismaClient()
const router: Router = Router()

router.get('/', (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, '../public/html/favourites.html'))
})

router.post('/', async(req: Request, res: Response)=>{
    const {trainerId, pokemonName, type} = req.body

    if(isNaN(trainerId) || !Number.isInteger(Number(trainerId))){
        res.status(500).json({error: 'Id is not a number or integer'})
        return
    }

    try{
        const tid = await prismaClient.trainer.findFirst({
            where: {id: Number(trainerId)},
            select: {id: true}
        })

        if(tid != null){
            const fpid = await prismaClient.favouritePokemon.findFirst({
                where: {TrainerId: tid.id},
                select: {TrainerId: true}
            })

            const favouritePokemonData= {
                TrainerId: Number(trainerId),
                name: pokemonName,
                type: type
            }

            if(fpid == null){

                await prismaClient.favouritePokemon.create({
                    data: favouritePokemonData
                })
            }
            else{
                await prismaClient.favouritePokemon.update({
                    where: {TrainerId: Number(trainerId)},
                    data: favouritePokemonData
                })
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

    res.redirect('/favourites')
})

export default router