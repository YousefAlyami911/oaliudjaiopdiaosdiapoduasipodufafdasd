const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'j'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
if(message.content.startsWith(prefix+"fortnite")) {
const Fortnite = require('fortnite');
const ft = new Fortnite('1010ab16-8f67-414a-a0b5-13d9e8b93954');
//!testing
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send(`**${prefix}fortnite <username> <platform (pc, xbnl, psn)>**`);
let username = args[0];
let platform = args[1] || "pc";
let data = ft.getInfo(username, platform).then(data => {

let stats = data.lifetimeStats;
let kills = stats.find(s => s.stat == "kills");
let wins = stats.find(s => s.stat == "wins");
let kd = stats.find(s => s.stat == "kd");
let mplay = stats.find(s => s.stat == "matchesPlayed");
let tplay = stats.find(s => s.stat == "timePlayed");
let score = stats.find(s => s.stat == "score");
let top25s = stats.find(s => s.stat == "top25s");
let url = `https://fortnitetracker.com/profile/${data.platform}/${data.username}`
let embed = new Discord.RichEmbed ()
.setAuthor(data.username)
.setColor("#ff6a00")
.addField("Kills", kills.value, true)
.addField("Wins", wins.value, true)
.addField("K/D", kd.value, true)
.addField("Matches Played", mplay.value, true)
.addField("Time Played", tplay.value, true)
.addField("Score", score.value, true)
.addField("Top 25s", top25s.value, true)
.addField("More Info", url, true)
message.channel.send(embed);

}).catch(e => {
console.log(e);
message.channel.send("** Didn't find that username! **")
});

}
client.login(process.env.BOT_TOKEN);
