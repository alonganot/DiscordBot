const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const getFolderJSFiles = require('../../util/getFolderJSFiles');

const COMMANDS_FOLDER_PATH = './src/commands';

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = getFolderJSFiles(COMMANDS_FOLDER_PATH);

        commandFolders.forEach(folder => {
            folder.files.forEach(file => {
                   const currCommand = require(`../../.${COMMANDS_FOLDER_PATH}/${folder.name}/${file}`);
            client.commands.set(currCommand.data.name, currCommand);
            client.commandsArray.push(currCommand.data.toJSON());
        
            console.log(`Command ${currCommand.data.name} has been passed through the handler`);
            })
        })

        const clientId = '1013044001546452992';
        const rest = new REST({version: '10'}).setToken(process.env.BOT_TOKEN);
        try {
            console.log('Starting to refresh application (/) commands.');
            await rest.put(Routes.applicationCommands(clientId), {
                body: client.commandsArray
            });
        } catch(error) {
            console.error(error);
        }
    }    
}
