const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns your ping to the server!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `API Latency: ${client.ws.ping}\n
        Client Ping: ${message.createdTimestamp - interaction.createdTimestamp} ms`
        await interaction.editReply({
            content: newMessage
        });
    }
}