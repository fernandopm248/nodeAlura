const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'host',
    port : port,
    user: 'user',
    password: 'pass',
    database: 'db'
})

module.exports = conexao
