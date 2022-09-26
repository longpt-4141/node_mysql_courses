const mysql = require('mysql2');

const connection = mysql.createPool({
                        host: 'localhost',
                        user: 'root',
                        database: 'node_mysql',
                        connectionLimit: 10
                    });

module.exports = connection
