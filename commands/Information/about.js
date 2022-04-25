const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'about',
  category: 'Information',
  aliases: ['botinfo'],
  description: 'See description about this project',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Invite').setStyle('LINK').setURL(client.config.links.invite),
      new MessageButton()
        .setLabel('GitHub')
        .setStyle('LINK')
        .setURL('https://github.com/brblacky/WaveMusic'),
      new MessageButton().setLabel('Support').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'Ashley ^^',
        iconURL:
          'https://cdn.discordapp.com/avatars/900246137397723156/0e03b63d2867266f8c874316a90bdb0f.png',
      })
      .setThumbnail(
        'https://cdn.discordapp.com/avatars/900246137397723156/0e03b63d2867266f8c874316a90bdb0f.png',
      )
      .setColor('#303236')
      .addField(
        'Creator',
        '[Ashley <3#5237](https://discord.gg/ReeQ2fSPQ2), and [CEO | Eul Joromat#5040](https://discord.gg/ReeQ2fSPQ2)',
        true,
      )
      .addField('Organization', '[Ashley <3#5237](https://github.com/EulJoromat)', true)
      .addField('Repository', '[Here]((https://github.com/EulJoromat/Ashley-)', true)
      .addField(
        '\u200b',
        `[Ashley ^^](https://github.com/EulJoromat/Ashley-) is [Ashley ^^](https://github.com/EulJoromat)'s Was created by Ashley <3#5237 and CEO | Eul Joromat#5040. He really wants to make his first open source project ever. Because he wants more for coding experience. In this project, he was challenged to make project with less bugs. Hope you enjoy using Ashley ^^!`,
      );
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};