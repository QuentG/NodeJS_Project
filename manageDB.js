#!/usr/bin/env node

/* -----------------------------
            MODULE
 -----------------------------   */

const sqlite3 = require('sqlite3').verbose()

/* -----------------------------
            FONCTIONS
 -----------------------------   */

// Recuperation de la DB
let db = function getDB(){
    return db = new sqlite3.Database('quizz.db', (err) => {
        if (err){
            console.log('Error :',err)
        }
    })
}

// Ajout d'un user 
exports.addUser = function addUser(name) {
    if (typeof name === String ){
        db.serialize(() => {
            //Ajout de l'user dans la DB
            let req = db.prepare('INSERT INTO user (name) VALUES (?)')
            req.run(name, null) // Not null 
            req.finalize()
            console.log('Success addUser(',name,') Welcome my friend !')
        })
    }else {
        console.log('Please enter a username with JUST letters thanks <3\n')
    }
}

// Check si l'user est dans la DB sinon le rajoute
exports.checkUser = function checkUser(name){
    db.serialize(() => {
        let req = 'SELECT * FROM user WHERE name = ?'
        db.get(req, [name], (success, error) => {
            if (success) {
                console.log('Hi',name)
            } 
            else if(error){
                addUser(name)
            }
            else {
                addUser(name)
            } 
            db.finalize()
        }) 
    })
}

// Voir le(s) user(s)
exports.showUsers = function showUsers() {
    let req  = 'SELECT * FROM user'
    db.each(req, (success, error) => {
        console.log(success.id, success.name)
    })
}

exports.getUserID = function getUserID(){

}

// Insertion du score
exports.insertScoreInDB = function insertScoreInDB() {

}

// Voir les scorces des joueurs
exports.showScore = function showScore() {

}

