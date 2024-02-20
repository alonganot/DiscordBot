const fs = require('fs');

module.exports = (path) => {
    const folders = fs.readdirSync(path);
    const folderFiles = [];
    folders.forEach(folder => {
        folderFiles.push({name: folder, files: fs.readdirSync(`${path}/${folder}`)
        .filter(file => file.endsWith('.js'))})
    });

    return folderFiles;
}
