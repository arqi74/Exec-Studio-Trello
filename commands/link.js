const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    var embed = new Discord.RichEmbed()
        .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png", "")
        .setFooter("Request send by "+message.author.username)
        .setColor(0x1e66c0)
        .setDescription("https://trello.com/b/7iB5PhfO/exec-studio-devs");
    message.channel.send(embed);
}