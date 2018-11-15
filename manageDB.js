#!/usr/bin/env node

/* -----------------------------
            MODULE
 -----------------------------   */

const sqlite3 = require('sqlite3').verbose()

/* -----------------------------
            FONCTIONS
 -----------------------------   */

// Recuperation de la DB
module.exports.db = () => {
    let db = new sqlite3.Database('quizz.db', (err) => {
        if (err){
            console.log('Error :',err)
        }
    })
    return db
}

// Ajout d'un user 
exports.addUser = function addUser(name, db) {
    if (typeof name == "string"){
        //Ajout de l'user dans la DB
        let req = 'INSERT INTO user (name) VALUES (?)'
        db.run(req, name)
        console.log('Success addUser(',name,') Welcome my friend !')
    }else {
        console.log('Please enter a username with JUST letters thanks <3\n')
    }
}

// Check si l'user est dans la DB sinon le rajoute
exports.checkUserInDB = function(name, db){
    return new Promise((resolve, reject) => {
        let req = 'SELECT * FROM user WHERE name = ?'
        db.all(req, name, (err, row) => {
            if (row != undefined && row.length > 0) {
                resolve()
            }
            else {
                reject()
            }
        })
    })
}

// Voir le(s) user(s)
exports.showUsers = function(db) {
    let req  = 'SELECT * FROM user'
    db.each(req, (err, row) => {
        console.log('ID -',row.id,' ', 'Name -',row.name)
    })
}

exports.getUserID = function getUserID(){
    
}

// Insertion du score
exports.insertScoreInDB = function (user_id, score) {
    let req = 'INSERT INTO scores (score, user_id) VALUES (?, ?)'
    db.run(req, score, user_id)
    console.log('Insert score on db DONE')
}

// Voir les scorces des joueurs
exports.showScore = function showScore() {

}

