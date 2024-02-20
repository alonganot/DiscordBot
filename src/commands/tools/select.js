const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('select')
    .setDescription('Choose what should i play next?'),
    async execute(interaction, client) {
       const select = new SelectMenuBuilder()
       .setCustomId('favorite-game-menu')
       .setMinValues(1)
       .setMaxValues(1)
       .setOptions(new SelectMenuOptionBuilder({
            label: 'Fortnite',
            value: 'Fortnite'
       }),
                   new SelectMenuOptionBuilder({
            label: 'Valorant',
            value: 'Valorant'
        }),
                   new SelectMenuOptionBuilder({
            label: 'Apex Legends',
            value: 'Apex Legends'
        }),
                   new SelectMenuOptionBuilder({
            label: 'Team Fortress 2',
            value: 'Team Fortress 2'
       }))
    
       await interaction.reply({
            content: 'What should i play next?',
            components: [new ActionRowBuilder().addComponents(select)]
       })
    }
}