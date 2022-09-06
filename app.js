const express = require('express');
const mysql = require('mysql');

// Create connection 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'user',
    password : 'LoraLora#123',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create tables
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';

db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Posts tables created...');
    });
});


app.listen('3000', () => {
    console.log("Server started on the port 3000");
})