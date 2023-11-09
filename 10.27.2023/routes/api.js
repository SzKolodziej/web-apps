const {Router} = require('express')
const router = Router()
const path = require('path')
const fs = require("fs/promises");
const createDbConnection = require('./db_connection')

router.get('/', async(req, res)=>
{
    let jsonData = await fs.readFile(path.join(__dirname,'../jsons/api.json'))
    jsonData = JSON.parse(jsonData)
    res.json(jsonData)
})

//api students
router.get('/students', async(req, res)=>
{
    const connection = createDbConnection()

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

router.get('/students/:id', async(req, res)=>
{
    const connection = createDbConnection()

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

//api subjects
router.get('/subjects', async(req, res)=>
{
    const connection = createDbConnection()

    connection.connect(async(MysqlError)=>
    {
        if(MysqlError) throw MysqlError

        const sql = 'SELECT * FROM subjects'
        await connection.query(sql, (MysqlError, result)=>
        {
            if(MysqlError)throw MysqlError
            res.json(result)
        })
        connection.end()
    })
})

router.get('/subjects/:id', async(req, res)=>
{
    const connection = createDbConnection()

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