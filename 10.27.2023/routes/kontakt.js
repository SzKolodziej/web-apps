const {Router} = require('express')
const router = Router()
const path = require('path')
const {createConnection, Connection, MysqlError} = require('mysql')

router.get('/', (req, res)=>
{
    res.sendFile(path.join(__dirname, '../public/html/kontakt.html'))
})

router.post('/', (req, res)=>
{
    console.log(req.body)

    const connection = createConnection({
        host: '172.29.0.1',
        user: 'root',
        password: '',
        database: 'db1'
    })
    connection.connect(async(MysqlError)=>
    {
        if(MysqlError)
        {
            throw MysqlError
        }

        const sql = `INSERT INTO form(imie, email, select_box, textarea) VALUES('${req.body.imie}', '${req.body.email}', '${req.body.select}', '${req.body.textarea}')`

        await connection.query(sql, (MysqlError)=>
        {
            if(MysqlError)
            {
                throw MysqlError
            }
        })
        connection.end()
    })

    res.redirect('/')
})

module.exports = router