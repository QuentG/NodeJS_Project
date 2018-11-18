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
    db.run("DROP TABLE user")
    db.run("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)")
})

//Fermeture de la BDD
db.close((err) => {
    if (err){
        return console.error(err.message)
    }
    console.log("Close the database connection !")
})