import http from 'http'
import {readFile, writeFile} from 'fs/promises'
const hostname = '127.0.0.1'

const server = http.createServer(async(req, res) =>
{
    let url = req.url
    let method = req.method

    if(url === '/')
    {
        res.statusCode = 200
        let html = await readFile('homepage.html')
        res.setHeader('content-type', 'text/html')
        res.write(html)
        res.end()
    }
    else if(url === '/dziekujemy')
    {
        res.statusCode = 302
        let html = await readFile('thankyou.html')
        res.setHeader('content-type', 'text/html')
        res.write(html)
        res.end()
    }
    else if(url==='/kontakt' && method==="POST")
    {
        const body = []

        req.on('data', (chunk) =>
        {
            body.push(chunk)
        })

        req.on('end', async() =>
        {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1]
            await writeFile(`./contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', '/dziekujemy')
            return res.end()
        })
    }
    else if(url === '/api'){
        const json = {
            Ob : {
                hello: 'world',
                goodbye: 'jasiu'
            },

            Ob2 : {
                hello: 'jonrad',
                goodbye: 'kopek'
            }
        }

        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(json))
        res.end()
    }
    else{
        const json = {
            err : "Nie znaleziono adresu"
        }

        res.statusCode = 404
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(json))
        res.end()
    }
})

server.listen('3000', hostname)
{
    console.log('Server works')
}