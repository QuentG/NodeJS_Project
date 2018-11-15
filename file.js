#!/usr/bin/env node

/* -----------------------------
            MODULE
 -----------------------------   */

 const fs = require('fs')
 const manageDB = require('./manageDB')


 /* -----------------------------
            FONCTIONS
 -----------------------------   */

exports.writeInFile = (data, file) => {
    file = quizz.txt
    fs.writeFile(file, data, (error) => {
        if (error) throw error
        console.log("Scores written on the file ", file)
    })
}
