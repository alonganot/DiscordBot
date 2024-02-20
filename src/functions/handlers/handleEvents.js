const getFolderJSFiles = require('../../util/getFolderJSFiles');

const EVENTS_FOLDER_PATH = './src/events';

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFolders = getFolderJSFiles(EVENTS_FOLDER_PATH);
            
        eventFolders.forEach(folder => {
            switch (folder.name) {
                case 'client':
                    folder.files.forEach(file => {
                        const event = require(`../../.${EVENTS_FOLDER_PATH}/${folder.name}/${file}`);
                    if (event.once) {
                        client.once(event.name, (...args) => event.execute(...args, client));
                    } else {
                        client.on(event.name, (...args) => event.execute(...args, client));
                    }
                    })
                    
                    break;
                default:
                    break;
            }
        })
    }
}