const Discord = require("discord.js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');

exports.run = (client, message, args) => {

    var arg, autor, title, label;
    arg = args[0];
    title = args[1];
    label = args[2];
    title = title.replace(/_/g, ' ');
    label = label.replace(/_/g, ' ');
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

    function api(listKey, name) {
        var options = { method: 'GET', url: 'https://api.trello.com/1/lists/'+listKey+'/cards', qs: { key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' } };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var obj = JSON.parse(body);
            for(i=0; i<obj.length; i++) {
                if(obj[i]["name"] == title) {
                    f1(obj[i]["id"]);
                    function f1(atr) {
                        var options = { method: 'GET', url: 'https://api.trello.com/1/boards/7iB5PhfO/labels', qs: { fields: 'all', key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' } };
                        request(options, function (error, response, body) {
                            if (error) throw new Error(error);
                            var labels = JSON.parse(body);
                            for(i=0; i<labels.length; i++) {
                                if(labels[i]["name"] == label) {
                                    f2(atr, labels[i]["id"]);
                                    function f2(atr1, atr2) {
                                        var options2 = {
                                            method: 'POST', url: 'https://api.trello.com/1/cards/'+atr1+'/idLabels', qs: { value: atr2, key: 'e87b2b200b6fcb908fc0b48c0515ce75', token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037' }};
                                        request(options2, function(error, response, body) {
                                            if(error) throw new Error(error);
                                            let embed = new Discord.RichEmbed()
                                                .setAuthor("Command Executed", "https://i.imgur.com/vzsqeks.png")
                                                .setFooter("Request send by "+autor)
                                                .setDescription("Add new label in **"+name+"**")
                                                .setColor(0x1e66c0);
                                                
                                            message.channel.send(embed);
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            }
        });
    }
}