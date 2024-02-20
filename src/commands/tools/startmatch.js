const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("startmatch")
    .setDescription("Starts a match"),
  async execute(interaction, client) {
    const message = await interaction.reply({
      content:
        "Match is about to start!\n you have 1 minute to react with :heart: to join!",
      fetchReply: true,
    });

    const filter = (reaction) => {
      return reaction.emoji.name == "❤️";
    };

    const timeInMillis = 60000;
    const collector = message.createReactionCollector({ filter, time: timeInMillis + 1000 });
    let timeleft = (timeInMillis - 5000) / 1000;
    let timer = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(timer);
      } else {
        message.edit("Match is about to start!\n you have 1 minute to react with :heart: to join!\n"
        + timeleft + " seconds remaining");
      }
      timeleft -= 5;
    }, 5000);

    let playerCount = 0;
    collector.on("collect", (reaction, user) => {
      playerCount++;
      const guild = client.guilds.cache.get(process.env.SERVER_ID);
      //FOUND THE GUILD, NEED TO FIND THE VOICE CHANNEL AND MOVE THE GUILD MEMBER (ITS NOT THE USER)
      // ---------------------------------------------------------------
      // const channel = guild.channels.get(process.env.LOBBY_CHANNEL_ID)
      // console.log(`${JSON.stringify(channel)}`);
      //member.voice.setChannel(client.channels.find('Lobby'));
      message.reply(
        `Welcome, ${user.username}!\n${playerCount} players have joined.`
      );
    });

    collector.on("end", (collected) => {
      console.log(`timer end! ${playerCount} players joined`);

      if (playerCount > 1) {
        message.reply(`You can no longer join.\nYou will soon be moved into a room, dont go anywhere!\n
        ${collected.size} players have joined.`);
      } else {
        message.reply('Not enough players have joined, aborting.');
      }
    });
  },
};
