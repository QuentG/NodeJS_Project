#!/usr/bin/env node

/* -----------------------------
            MODULE
 ------------------------------  */

 const fs = require('fs')

 /* -----------------------------
            FONCTION
 ------------------------------  */

exports.writeInFile = (data) => {
    let file = 'quizzScore.txt'
    fs.appendFile(file, data, (error) => {
        if (error) throw error
        console.log("Score written in the file !", file)
    })
}
