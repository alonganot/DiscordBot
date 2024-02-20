const getFolderJSFiles = require('../../util/getFolderJSFiles');
const { pick } = require('radash');

const COMPONENTS_FOLDER_PATH = './src/components';

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentsFolders = getFolderJSFiles(COMPONENTS_FOLDER_PATH);

        componentsFolders.forEach(folder => {
            const { ...clientDMObj } = pick(client, [folder.name]);
            const clientDM = Object.values(clientDMObj)[0];

            folder.files.forEach(file => {
                const component = require(`../../.${COMPONENTS_FOLDER_PATH}/${folder.name}/${file}`);
                clientDM.set(component.data.name, component);
            })

        })
    }
}