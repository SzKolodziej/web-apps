import * as http from 'http'
import { readFile } from 'fs/promises'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(async(req, res)=>
{
    const url = req.url

    if(url==='/')
    {
        res.statusCode = 200
        const html = await readFile('index.html')
        res.write(html)
        res.end()
    }
})

server.listen(port, hostname, ()=>
{
    console.log(`Server running at http://${hostname}:${port}/`)
})