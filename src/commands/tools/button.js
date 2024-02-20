const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('Returns a button that links to my YT page!'),
    async execute(interaction, client) {
       const button = new ButtonBuilder()
       .setCustomId('sub-yt')
       .setLabel('Click me!')
       .setStyle(ButtonStyle.Primary);
    
       await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
       })
    }
}