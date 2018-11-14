#!/usr/bin/env node

/* -----------------------------
            MODULE
 -----------------------------   */
const sqlite3 = require('sqlite3').verbose()

/* -----------------------------
         CONNECTION DB
 -----------------------------   */
let db = new sqlite3.Database('quizz.db', (err) => {
    if (err){
        return console.error(err.message)
    }
    console.log("Connected to the SQLite db !")
})

/* -----------------------------
           INIT DB
 -----------------------------   */
db.serialize(() => {
    //.run() retourne un obj Database qui permet de chainer les appels de méthode
    db.run("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)")
    db.run("CREATE TABLE scores (id INTEGER PRIMARY KEY AUTOINCREMENT, score INTEGER, user_id INTEGER REFERENCES user(id) ON DELETE CASCADE)")
})

//Fermeture de la BDD
db.close((err) => {
    if (err){
        return console.error(err.message)
    }
    console.log("Close the database connection !")
})