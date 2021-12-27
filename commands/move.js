const Discord = require("discord.js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');

exports.run = (client, message, args) => {

    var arg, autor, title, label;
    arg = args[0];
    title = args[1];
    arg2 = args[2];
    title = title.replace(/_/g, ' ');
    autor = message.author.username;

    if(arg == "-b") {
        api("5c3bb9a3f869025467d95c02", "Bugs");
    } else if(arg == "-o") {
        api("5c3bb9b22cd86f7512cfbbbf", "Optymalization");
    } else if(arg == "-t") {
       api("5c3bb9d05418dd2403855a53", "To do");
    } else if(arg == "-i") {
        api("5c3bb9db2ba0697b81f7c7e7", "Ideas");
    } else if(arg == "-e") {
        api("5c3bb9fb3c20868d9f4c491b", "Critical Errors");
    } else if(arg == "-c") {
        api("5c3bba0509d0d850d4455233", "Calendar");
    } else {
        let embed = new Discord.RichEmbed()
            .setAuthor("Command Error", "https://i.imgur.com/vzsqeks.png")
            .setFooter("Request send by "+autor)
            .setDescription("No argument found!")
            .setColor(0x1e66c0);
            
        message.channel.send(embed);
    }

    function api(cardID, name) {
        var options = { method: 'GET', url: 'https://api.trello.com/1/lists/'+cardID+'/cards', qs: { key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' } };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var obj = JSON.parse(body);
            for(i=0; i<obj.length; i++) {
                if(obj[i]["name"] == title) {
                    f1(obj[i]["id"]);
                    function f1(atr) {
                        if(arg2 == "-d") {
                            var options = { method: 'PUT',
                            url: 'https://api.trello.com/1/cards/'+atr+'',
                            qs: 
                             { idList: '5c4b6a853fe0f8779a76ed58',
                               key: 'e87b2b200b6fcb908fc0b48c0515ce75',
                               token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' } };
                          
                          request(options, function (error, response, body) {
                            if (error) throw new Error(error);
                            let embed = new Discord.RichEmbed()
                                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                                .setFooter("Request send by "+autor)
                                .setDescription("Card moved to **"+name+"**")
                                .setColor(0x1e66c0);
                                
                            message.channel.send(embed);
                          });
                        }
                    }
                }
            }
        });
    }
}