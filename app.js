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

// insert post 1
app. get('/addpost1', (req, res) => {
    let post = {title: 'post one', body: 'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts 1 added...');
    });
});

// insert post 2
app. get('/addpost2', (req, res) => {
    let post = {title: 'post Two', body: 'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts 2 added...');
    });
});

// Slect post
app. get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});


// Slect Single post
app. get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts where id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched');
    });
});

app.listen('3000', () => {
    console.log("Server started on the port 3000");
})