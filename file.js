#!/usr/bin/env node

/* -----------------------------
            MODULE
 ------------------------------  */

 const fs = require('fs')

 /* -----------------------------
            FONCTION
 ------------------------------  */

exports.writeInFile = (data) => {
    let file = 'quizzLog.txt'
    fs.appendFile(file, data, (error) => {
        if (error) throw error
        console.log("Logs written on the file !", file)
    })
}
