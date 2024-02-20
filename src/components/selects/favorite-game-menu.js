const fs = require('fs');

module.exports = {
    data: {
        name: 'favorite-game-menu'
    },
    async execute(interaction, client) {
        fs.appendFileSync('./src/data/gameSelections.txt',
         `${interaction.user.tag} chose: [${interaction.values[0]}]\n`,
         "UTF-8",
         {'flags': 'a+'});
        await interaction.reply({
            content: `Your chose ${interaction.values[0]}. Thanks!`
        });
    }
}