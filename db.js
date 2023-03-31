const Pool = require('pg').Pool
const pool = new Pool({
    user: 'proger',
    password: 'root#E1',
    host: 'localhost',
    port: 5432,
    database: 'nkse_api',
})

module.exports = pool
