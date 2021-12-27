const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    var embed = new Discord.RichEmbed()
        .setAuthor("Command list", "https://i.imgur.com/Ae4mkwn.png", "")
        .setFooter("Request send by "+message.author.username)
        .setColor(0x1e66c0)
        .setThumbnail("https://i.imgur.com/aqyhN1x.png")
        .addField("Command", ".add -b [title]\n.add -o [title]\n.add -t [title]\n.add -i [title]\n.add -e [title]\n.add -c [title]\n.link\n.label -b [title] [label]\n.label -o [title] [label]\n.label -t [title] [label]\n.label -i [title] [label]\n.label -e [title] [label]\n.label -c [title] [label]\n.move -b [title] -d\n.move -o [title] -d\n.move -t [title] -d\n.move -i [title] -d\n.move -e [title] -d\n.move -c [title] -d", true)
        .addField("Description", "| Add new card to **Bugs**\n| Add new card to **Optymalization**\n| Add new card to **To Do**\n| Add new card to **Ideas**\n| Add new card to **Critical Errors**\n| Add new card to **Calendar**\n| Send trello table link\n| Add new labbel in **Bugs**\n| Add new labbel in **Optymalization**\n| Add new labbel in **To Do**\n| Add new labbel in **Ideas**\n| Add new labbel in **Critical Errors**\n| Add new labbel in **Calendar**\n| Moving from **Bugs** to **Done**\n| Moving from **Optymal.** to **Done**\n| Moving from **To Do** to **Done**\n| Moving from **Ideas** to **Done**\n| Moving from **Critical Errors** to **Done**\n| Moving from **Calendar** to **Done**", true);

    message.channel.send(embed);
}