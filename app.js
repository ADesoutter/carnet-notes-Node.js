const yargs = require("yargs");
const fs = require("fs");

yargs.command({
    command: 'list',
    describe: 'Liste toutes mes notes',
    handler: () => {
        console.log("Voici la liste de toutes mes notes");

        fs.readFile("data.json", "utf-8", (err,data) => {
            if(err) console.log(err);
            else {
                const notes = JSON.parse(data);
                console.log(notes);
            }
        })
    }
}).command({
    command: 'add',
    describe: 'Ajoute une note',
    builder: {
        title: {
            describe: "Titre de ma note",
            demandOption: true,
            type: 'string'
        },
        message: {
            describe: "Contenu de ma note",
            demandOption: false,
            type: 'string'
        }
    },
    handler: (argv) => {

        const newNote = [{
            title : argv.title,
            message : argv.message
        }];

        const newNotesJSON = JSON.stringify(newNote);
        console.log(notesJSON);

        fs.writeFile("data.json", newNotesJSON, (err) => {
            if(err) console.log(err);
            else {
                console.log("La nouvelle note a été ajoutée");
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
    handler: (argv) => {
        console.log("On peut supprimer une note");


    }
}).command({
    command: "read",
    describe: "Affiche le titre et le message d'une note",

    handler: (argv) => {
 
          // récupérer le fichier
          fs.readFile ("data.json", "utf-8", (err,dataStr) => {
            if(err) console.log(err);
            else {
             console.log(dataStr);
             
             // Je transforme le JSON en objet JS
            const dataObjJS = JSON.parse(dataStr);
            console.log(dataObjJS);

             // Execute les modifications en JS
//            const newNote = {
//                title= argv.title,
//                message= argv.message
//            }
//             dataObjJS.push(newNote);

//            dataObjJS.title = "Batman";
//            dataObjJS.message = "Le meilleur super héros de tous les temps";
              dataObjJS.push({ title: argv.title, message: argv.message});
             console.log(dataObjJS);

             // Transformer les modifs en JSON grace à stringify
             const changeNoteJSON = JSON.stringify(dataObjJS);
             console.log(changeNoteJSON);

             //Envoyer les modifs à mon data.json
             fs.writeFile("data.json", changeNoteJSON,(err) => {
                 if(err) console.log(err);
                 else {
                     console.log("La note a été modifié");
                 }
             });
            }
        })
    }
}).argv