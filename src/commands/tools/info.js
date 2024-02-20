const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Check out my info!'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle('MaxtaZ`s server')
        .setDescription('Welcome to my discord!')
        .setColor(0x2B6B78)
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            url: 'https://www.youtube.com/channel/UCfrPDBWHWFRh-8lWXinCESg',
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: 'Don`t forget to subscribe!'
        })
        .setURL('https://www.youtube.com/channel/UCfrPDBWHWFRh-8lWXinCESg')
        .addFields([
            {
                name: 'MaxtaZ',
                value: 'Owner',
                inline: true
            },
            {
                name: 'Alon',
                value: 'Admin & Main Programmer',
                inline: true
            }
        ]);

        await interaction.reply({
            embeds: [embed]
        })
    }
}