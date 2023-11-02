const {Router} = require('express')
const router = Router()
const {createConnection, Connection, MysqlError} = require('mysql')

router.get('/api/subjects', async(req, res)=>
{
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

        const sql = 'SELECT * FROM subjects'
        await connection.query(sql, (MysqlError, result)=>
        {
            if(MysqlError)throw MysqlError
            res.json(result)
        })
        connection.end()
    })
})

router.get('/api/subjects/:id', async(req, res)=>
{
    const connection = createConnection({
        host: '172.29.0.1',
        user: 'root',
        password: '',
        database: 'db1'
    })
    connection.connect(async(MysqlError)=>
    {
        if(MysqlError) throw MysqlError

        const sql = `SELECT * FROM subjects WHERE id=${req.params.id}`
        await connection.query(sql, (MysqlError, result)=>
        {
            if(MysqlError)throw MysqlError

            if(result.length===0)
            {
                res.status(404).json({error: 'Subjects not found'})
            }
            else
            {
                res.json(result)
            }
        })
        connection.end()
    })
})

module.exports = router