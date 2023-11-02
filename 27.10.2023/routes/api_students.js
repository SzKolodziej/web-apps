const {Router} = require('express')
const router = Router()
const {createConnection, Connection, MysqlError} = require('mysql')

router.get('/api/students', async(req, res)=>
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

        const sql = 'SELECT * FROM students'
        await connection.query(sql, (MysqlError, result)=>
        {
            if(MysqlError)throw MysqlError
            res.json(result)
        })
        connection.end()
    })
})

router.get('/api/students/:id', async(req, res)=>
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

        const sql = `SELECT * FROM students WHERE id=${req.params.id}`
        await connection.query(sql, (MysqlError, result)=>
        {
            if(MysqlError)throw MysqlError

            if(result.length===0)
            {
                res.status(404).json({error: 'Student not found'})
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