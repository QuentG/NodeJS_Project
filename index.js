#!/usr/bin/env node

console.log('Hi bro! Are you ready for this QUIZZZZZZ ?')

/* -----------------------------
            MODULES
 -----------------------------   */

const program = require('commander')
const inquirer = require('inquirer')
const axios = require('axios')

/* -----------------------------
            VARIABLES
 -----------------------------   */

const theme_url = 'https://opentdb.com/api.php?amount=10&category='
const game_type_url = '&difficulty=medium&type=boolean'
let get_theme = {}
let get_quest = {}

/* -----------------------------
            COMMANDES
 -----------------------------   */

program
  .version('1.0.0')
  .option('-t, --theme', 'Show themes')
  .option('-a, --art', 'Quizz Art')
  .option('-h, --history', 'Quizz History' )
  .option('-j, --videos', 'Quizz Video Games')
  // On parse
  program.parse(process.argv)

/* -----------------------------
            FONCTIONS
 -----------------------------   */

// Recupération des 3 thèmes préciser avec leur id
function getThirdTheme(){
    for(let t = 0; t < get_theme.trivia_categories.length; t++){
      const obj = get_theme.trivia_categories[t]
      if(obj.id == 15 || obj.id == 23 || obj.id == 25 ){
          console.log("Theme :", obj.name)
      }
    }
}

// Recuperation des thèmes 
function getTheme() {
  axios.get('https://opentdb.com/api_category.php').then((response) => {
      get_theme = response.data
      //Recup des 3 thèmes
      getThirdTheme()
  }).catch((err) => {
      console.log('Error :', err)
  })
}

function getQuestions(idCateory) {
  axios.get().then((response) => {
  }).catch((err) => {
      console.log('Error :', err)
  })
}

console.log(get_quest)

 
/* -----------------------------
            PROGRAMME
 -----------------------------   */

if (program.theme) {
  getTheme()
}
else if(program.films) {
    
}
else if(program.histoire) {
    
}
else if(program.jeuxVideos) {
    
}
else {
    program.help()
}