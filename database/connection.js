const mysql = require('mysql');
// const dotenv = require('dotenv');

const connection = mysql.createConnection({
    host: 'Your hoster server',
    user: 'your user',
    password: 'your password',
    database: 'your database',
});

if(connection.state === 'disconnected') {
    console.log('Database is not connected.');
} else {
    console.log('Database is connected.');
}

module.exports = connection;
