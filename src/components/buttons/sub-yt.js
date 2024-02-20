module.exports = {
    data: {
        name: 'sub-yt'
    },
    async execute(interaction) {
        await interaction.reply({
            content: 'https://www.youtube.com/channel/UCfrPDBWHWFRh-8lWXinCESg'
        })
    }
}