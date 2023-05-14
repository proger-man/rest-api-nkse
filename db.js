const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'jR428%fgLK9!',
    host: 'localhost',
    port: 5432,
    database: 'nkse_api',
})

module.exports = pool
