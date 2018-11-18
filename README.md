# NodeJS_Project

_Quentin Gans Ingesup B2B_

Projet NodeJs : Commande CLI ask-me-something

Réaliser grâce à l'API d'openDB : https://opentdb.com/api_config.php

## Description

La commande _quizz_ permet de répondre à 3 catégories de quizz qui comporte chacune 10 questions sous la forme de vrai / faux.
Quizz en Anglais 😏.

## Liste des options disponibles

| Commandes                      | Description|
| ---                            | ---|
| `-V, --version`                | Affiche la version de la commande|
| `-t, --theme`                  | Voir les thèmes disponibles|
| `-m, --music`                  | Quizz sur la musique|
| `-h, --history`                | Quizz sur l'histoire|
| `-j, --videos`                 | Quizz sur les jeux vidéos|
| `-u, --adduser <name>`         | Ajout d'un user dans la BDD ou jouer en tant qu'user|
| `-s, --showuser`               | Liste des users qui ont déjà jouer|
| `--help`                       | Affiche l'aide|

## Modules 

- Axios : Récupération des données de l'api
- Commander : Ajout d'option quizz -[option]
- Inquirer :  Choix de réponse pour le user (ici Vrai / Faux)
- fs : Permet l'écriture des scores dans un fichier
- sqlite3 : Stockage des users dans une base de données

## Installation 

MacOs 💻
```sh
sudo npm install -g
```
Windows (executer l'invité de commande en administrateur)
```sh
npm install -g
```
⚠️ Si vous rencontrez une erreur du type 
```sh
Error: Cannot find module 'node_modules/sqlite3/lib/binding/node-v59-linux-x64/node_sqlite3.node'
```
Faites un 
```sh
npm install sqlite3
```

## Problème(s)

- Soucis d'encodage au niveau des questions (non-résolu)
