const yargs = require("yargs");
const fs = require("fs");

yargs.command({
    command: 'list',
    describe: 'affiche les titres de toutes mes notes',
    handler: () => {
        console.log("Voici les titres de toutes mes notes");
    }
}).command({
    command: 'add',
    describe: 'Ajoute une note',
    builder: {
        title: {
            describe: "Ma note",
            demandOption: true,
            type: 'string'
        },
        message: {
            describe: "Contenu de ma note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const listNote = [{
            title: argv.title,
            message: argv.message
        }]
        
        const listNoteJSON = JSON.stringify(listNote);
        fs.writeFile("data.json",listNoteJSON,(err) => {
            if(err) console.log(err);
            else {
                console.log("Voici ma nouvelle liste de notes en JSON");
            }
        });
    }
}).command({
    command: "remove",
    describe: "supprime une note",
    builder: {
        title: {
            describe: "Ma note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        console.log("On peut supprimer une note");
    }
}).command({
    command: "read",
    describe: "Affiche le titre et le message d'une note",
    builder: {
        title: {
            decribe: "Ma note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        console.log("On peut lire le détail des notes");
    }
}).argv