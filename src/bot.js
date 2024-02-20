require('dotenv').config();

const { BOT_TOKEN } = process.env;
const { Client, Collection } = require('discord.js');
const getFolderJSFiles = require('./util/getFolderJSFiles');

const client = new Client({ intents: 32767 });
client.commands = new Collection();
client.buttons = new Collection();
client.selects = new Collection();
client.modals = new Collection();
client.commandsArray = [];

const FUNCTIONS_FOLDER_PATH = './src/functions';
const functionFolders = getFolderJSFiles(FUNCTIONS_FOLDER_PATH);

functionFolders.forEach(folder => {
    folder.files.forEach(file => {
        require(`./functions/${folder.name}/${file}`)(client);
    })
})

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(BOT_TOKEN);
