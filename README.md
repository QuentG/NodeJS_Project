# NodeJS_Project

_Quentin Gans Ingesup B2B_

NodeJs project : CLI command ask-me-something

Realize thanks to the openDB API : https://opentdb.com/api_config.php

## Description

The _quizz_ command is used to answer 3 categories of quizzes that each have 10 questions in the form of true / false.
Quiz in English 😏.

## Liste des options disponibles

| Orders                         | Description|
| ---                            | ---|
| `-V, --version`                | Displays the version of the command|
| `-t, --theme`                  | See available themes|
| `-m, --music`                  | Quiz on the music|
| `-h, --history`                | Quiz on the story|
| `-j, --videos`                 | Quiz about video games|
| `-u, --adduser <name>`         | Add a user to the database or play as an user|
| `-s, --showuser`               | List of users who have already played|
| `--help`                       | Displays help|

## Modules 

- Axios : Retrieving API data
- Commander : Added quizz option -[option]
- Inquirer : Choice of answer for the user (here True / False)
- fs : Allows writing scores to a file
- sqlite3 : Storing users in a database

## Installation 

MacOs 💻
```sh
sudo npm install -g
```
Windows (execute the command prompt as administrator)
```sh
npm install -g
```
⚠️ If you encounter an error of the type
```sh
Error: Cannot find module 'node_modules/sqlite3/lib/binding/node-v59-linux-x64/node_sqlite3.node'
```
Make a
```sh
npm install sqlite3
```

## Problem(s)

- Encoding concerns at question level (unresolved)
