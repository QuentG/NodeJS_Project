#!/usr/bin/env node

/* -----------------------------
            MODULE
 -----------------------------   */

const sqlite3 = require('sqlite3').verbose()
const fileM = require('./file')

/* -----------------------------
      FONCTIONS + EXPORTS
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

// Recuperation de l'id du user
function getUserID(user, callbackParam, callback) {
    if (typeof user == "string"){
            let req = 'SELECT id FROM user WHERE name = ?'
            db.all(req, [user], (error, row) => {
                if (error)
                    return console.log("No user matches")
                else {
                    callback(row.id, callbackParam)
                }
            })
    }else{
        console.error("\nCanceling the user's creation : ",user)
        return
    }
}

// Insertion DB
exports.insertDB = async (user, score) => {
    try {
        await getUserID(user, score, inseryScoreInDB)
    }
    catch (e) {
        console.log(e.message)
    }
}

// Insertion du score
exports.insertScoreInDB = function (user_id, score) {
    let req = 'INSERT INTO scores (score, user_id) VALUES (?, ?)'
    db.run(req, score, user_id)
    console.log('Insert score on db DONE')
}

// Voir les scores des users
function showScores(user_id, file = false) {  
    let data = ["Scores"]
    let req = "SELECT s.score, u.name FROM scores s JOIN user u ON u.id = s.user_id WHERE s.user_id = " + user_id
    db.each(req, function(err, row) {
        if (err)
            return console.log(err.message)
        let rows = row.name + ' ' + row.score
        data.push("\n", rows)
        if (!file)
            console.log(row);
    }, () => {
        if (file)
            fileM.writeInFile(data, file)
    })
}

exports.exportScores = function (user, file) {
    getUserID(user, file, showScores)
}