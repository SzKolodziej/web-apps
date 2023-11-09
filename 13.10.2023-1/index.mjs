import {Readable} from 'stream'
import {writeFile} from 'fs/promises'

function * generator()
{
    for(let i=0; i<20;i++)
    {
        yield Math.floor(Math.random() * (2137+420+1)-420)
    }
}

let result = ''
const readable = Readable.from(generator())

readable.on('data', (chunk)=>
{
    result += chunk.toString()
    result += '\n'
})

readable.on('end', async()=>
{
    await writeFile(`random-${Date.now().toString()}.txt`, result)
})
