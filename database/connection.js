const mysql = require('mysql');
// const dotenv = require('dotenv');

const connection = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12612708',
    password: 'Fadt5rWQW9',
    database: 'sql12612708',
});

if(connection.state === 'disconnected') {
    console.log('Database is not connected.');
} else {
    console.log('Database is connected.');
}

module.exports = connection;