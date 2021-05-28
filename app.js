const yargs = require("yargs");

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
    handler: argv => {
        console.log(`Voici le titre de ${argv.title} qui parle ${argv.message}`);
    }
}).argv