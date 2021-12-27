const Discord = require("discord.js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');

exports.run = (client, message, args) => {

    if(args == undefined) return;

    var arg, test, autor;
    arg = args[0];
    title = args[1];
    title = title.replace(/_/g, ' ');
    autor = message.author.username;

    if(arg == "-b") {
        var options = { method: 'POST', url: 'https://api.trello.com/1/lists/5c3bb9a3f869025467d95c02/cards', qs: { name: title, key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' }};
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                .setFooter("Request send by "+autor)
                .setDescription("Add new card to **Bugs**")
                .setColor(0x1e66c0);
                
            message.channel.send(embed);
        });

    } else if(arg == "-o") {
        var options = { method: 'POST', url: 'https://api.trello.com/1/lists/5c3bb9b22cd86f7512cfbbbf/cards', qs: { name: title, key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' }};
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                .setFooter("Request send by "+autor)
                .setDescription("Add new card to **Optymalization**")
                .setColor(0x1e66c0);
                
            message.channel.send(embed);
        });

    } else if(arg == "-t") {
        var options = { method: 'POST', url: 'https://api.trello.com/1/lists/5c3bb9d05418dd2403855a53/cards', qs: { name: title, key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' }};
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                .setFooter("Request send by "+autor)
                .setDescription("Add new card to **To Do**")
                .setColor(0x1e66c0);
                
            message.channel.send(embed);
        });

    } else if(arg == "-i") {
        var options = { method: 'POST', url: 'https://api.trello.com/1/lists/5c3bb9db2ba0697b81f7c7e7/cards', qs: { name: title, key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' }};
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                .setFooter("Request send by "+autor)
                .setDescription("Add new card to **Ideas**")
                .setColor(0x1e66c0);
                
            message.channel.send(embed);
        });

    } else if(arg == "-e") {
        var options = { method: 'POST', url: 'https://api.trello.com/1/lists/5c3bb9fb3c20868d9f4c491b/cards', qs: { name: title, key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' }};
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                .setFooter("Request send by "+autor)
                .setDescription("Add new card to **Critical Errors**")
                .setColor(0x1e66c0);
                
            message.channel.send(embed);
        });

    } else if(arg == "-c") {
        var options = { method: 'POST', url: 'https://api.trello.com/1/lists/5c3bba0509d0d850d4455233/cards', qs: { name: title, key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' }};
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let embed = new Discord.RichEmbed()
                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                .setFooter("Request send by "+autor)
                .setDescription("Add new card to **Calendar**")
                .setColor(0x1e66c0);
                
            message.channel.send(embed);
        });

    } else {
        let embed = new Discord.RichEmbed()
            .setAuthor("Command Error", "https://i.imgur.com/vzsqeks.png")
            .setFooter("Request send by "+autor)
            .setDescription("No argument found!")
            .setColor(0x1e66c0);
            
        message.channel.send(embed);
    }
}