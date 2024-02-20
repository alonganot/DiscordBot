const { InteractionType } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) { 
                return
            } else {
                try {
                    await command.execute(interaction, client);
                } catch(error) {
                    console.log(error);
                    await interaction.reply({
                        content: 'Something went wrong, sorry!',
                        ephemeral: true
                    })
                }
            }
        } else if (interaction.isButton()) {
            const button = client.buttons.get(interaction.customId);

            if (!button) {
                return new Error("No such button");
            }

            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.isSelectMenu()) {
            const select = client.selects.get(interaction.customId);

            if (!select) {
                return new Error("No such select");
            }

            try {
                await select.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.type == InteractionType.ModalSubmit) {
            const modal = client.modals.get(interaction.customId);
            
            if (!modal) {
                return new Error("No such modal");
            }

            try {
                await modal.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        }
    }
}