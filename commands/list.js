const Discord = require("discord.js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');

exports.run = (client, message, args) => {

    var options = { 
        method: 'GET',
        url: 'https://api.trello.com/1/boards/7iB5PhfO/lists',
        qs: { 
            key: 'e87b2b200b6fcb908fc0b48c0515ce75',
            token: '162238d3905c31643be89eba7243ba44f39a3608a831697b2bb39088d02fe037'
        } 
    };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    
    console.log(body);
  });


}