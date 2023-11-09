const {createConnection} = require('mysql')

const createDbConnection = ()=>
{
    return createConnection({
        host: '172.29.0.1',
        user: 'root',
        password: '',
        database: 'db1'
    })
}

module.exports = createDbConnection;