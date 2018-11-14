#!/usr/bin/env node

/* -----------------------------
            MODULES
 -----------------------------   */

const program = require('commander')
const inquirer = require('inquirer')
const axios = require('axios')

/* -----------------------------
            VARIABLES
 -----------------------------   */

const theme_url = 'https://opentdb.com/api.php?amount=5&category='
const game_type_url = '&difficulty=medium&type=boolean' //Difficulty + True/False
let get_theme = {}
let get_quest = {}
let allQuestions = [] // Array
let reponse = []
let score = 0

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
      //Recup les thèmes choisis
      getThirdTheme()
  }).catch((err) => {
      console.log('Error :', err)
  })
}

// Recupération des questions en fonction de l'id de la catégorie
function getQuestions(callback, id_category) {
  axios.get(theme_url+id_category+game_type_url).then((response) => {
    get_quest = response.data['results']
    setTimeout(() => {
      callback(get_quest[0].category, get_quest)
    },600)
  }).catch((err) => {
      console.log('Error :', err)
  })
}

// Fonction qui va check si la réponse est vrai ou non
function checkReponses() {
  for(let t = 0; t < get_quest.length; t++){
    let question = t + 1
    //On défini le type des questions
    allQuestions[t] =  {
      type: 'checkbox',
      name: `${question}`,
      message: `${get_quest[t].question}`,
      choices: ['True', 'False'],
  }
    if(get_quest[t].incorect_answer == 'True'){
        reponse[t] = 'False'
    }
    else if (get_quest[t].correct_answer == 'True'){
        reponse[t] = 'True'
    }
    else {
      console.log('')
    }
  }
}


function startGame(get_quest) {
  checkReponses()
  //On laisse le choix à l'utilisateur true/false
  inquirer.prompt(allQuestions).then((answer) => {
      for (let t = 0; t < 5; t++){
        console.log('Results :')
        question = t + 1
        if (answer[get_quest] == reponse[t]){
          score++
          console.log('Nice !! Good job !\n')
        }else {
          console.log('Wrooooong answer !\n')
        }
      }
      console.log(score+"/5")
  })
}

 
/* -----------------------------
            PROGRAMME
 -----------------------------   */

if (program.theme) {
  getTheme()
}
else if(program.art) {
  getQuestions(startGame, 15)
}
else if(program.history) {
  getQuestions(startGame, 23)
}
else if(program.videos) {
  getQuestions(startGame, 25)
}
else {
    program.help()
}