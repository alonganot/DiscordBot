const fs = require('fs');

module.exports = {
    data: {
        name: 'messageMe'
    },
    async execute(interaction, client) {
        fs.appendFileSync('./src/data/messages.txt',
         `${interaction.user.tag} - ${interaction.fields.getTextInputValue('messageInput')}\n`,
         "UTF-8",
         {'flags': 'a+'});

        await interaction.reply({
            content: `${interaction.user.tag}, Your message has been sent to MaxtaZ. Thanks!`
        })
    }
}