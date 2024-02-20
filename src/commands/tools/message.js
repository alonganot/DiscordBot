const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("message")
    .setDescription("Send MaxtaZ a message!"),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("messageMe")
      .setTitle("Message me!");

    const textInput = new TextInputBuilder()
      .setCustomId("messageInput")
      .setLabel("What do you want to tell me?")
      .setPlaceholder("Write your message here....")
      .setRequired(true)
      .setStyle(TextInputStyle.Paragraph);

      

    modal.addComponents(
      new ActionRowBuilder().addComponents(textInput)
    );

    await interaction.showModal(modal);
  },
};
