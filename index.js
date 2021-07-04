const Discord = require("discord.js") 
const fetch = require("node-fetch")
const Database = require("@replit/database")
const Pokemon = require("./Pokemon")

const keepAlive = require("./Alivee.js")

const db = new Database()
const client = new Discord.Client()


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})



client.on('message', msg => {
  if (msg.content === 'bro') {
    msg.reply([index]);


  }
  else if (msg.content === "Lucario.Tier") {
    msg.channel.send(Pokemon.Lucario.Smogon_Tier);

  } 
  else if (msg.content === "Lucario.Pokedex_entries") {
    let indexL = Math.floor(Math.random() * Pokemon.Lucario.Pokedex_entries.length)
    msg.channel.send(Pokemon.Lucario.Pokedex_entries[indexL]);

  }
   else if (msg.content === "lucario.Pokedex_Entries.All") {
    msg.channel.send(Pokemon.Lucario.Pokedex_entries);

  }
    else if (msg.content === "Lucario.Appearance") {
    msg.channel.send(Pokemon.Lucario.Appearance);

  }
    else if (msg.content === "Lucario.Stats") {
    msg.channel.send(Pokemon.Lucario.Stats);

  }
    else if (msg.content === "Lucario.Anime") {
    msg.channel.send(Pokemon.Lucario.Notable_Anime_appearances);

  }
    else if (msg.content === "Lucario.Lore") {
    msg.channel.send(Pokemon.Lucario.Lore_and_Background);

  }
    else if (msg.content === "Infernape.Tier") {
    msg.channel.send(Pokemon.Infernape.Smogon_Tier);

  }
    else if (msg.content === "Infernape.Pokedex_Entries") {
    let indexI = Math.floor(Math.random() * Pokemon.Infernape.Pokedex_entries.length)
    msg.channel.send(Pokemon.Infernape.Pokedex_entries[indexI]);

  }
   else if (msg.content === "Infernape.Pokedex_Entries.All") {
    msg.channel.send(Pokemon.Infernape.Pokedex_entries);

  }
    else if (msg.content === "Infernape.Stats") {
    msg.channel.send(Pokemon.Infernape.Stats);

  }
    else if (msg.content === "Infernape.Appearance") {
    msg.channel.send(Pokemon.Infernape.Appearance);

  }
    else if (msg.content === "Infernape.Anime") {
    msg.channel.send(Pokemon.Infernape.Notable_Anime_appearances);

  }
    else if (msg.content === "Infernape.Lore") {
    msg.channel.send(Pokemon.Infernape.Lore_and_Background);

  }
    else if (msg.content === "Pikachu.Tier") {
    msg.channel.send(Pokemon.Pikachu.Smogon_Tier);

  }
    else if (msg.content === "Pikachu.Pokedex_Entries") {
    let indexP = Math.floor(Math.random() * Pokemon.Pikachu.Pokedex_entries.length)
    msg.channel.send(Pokemon.Pikachu.Pokedex_entries[indexP]);

  }
  else if (msg.content === "Pikachu.Pokedex_Entries.All") {
    msg.channel.send(Pokemon.Pikachu.Pokedex_entries);

  }
    else if (msg.content === "Pikachu.Stats") {
    msg.channel.send(Pokemon.Pikachu.Stats);

  }
    else if (msg.content === "Pikachu.Appearance") {
    msg.channel.send(Pokemon.Pikachu.Appearance);

  }
    else if (msg.content === "Pikachu.Anime") {
    msg.channel.send(Pokemon.Pikachu.Notable_Anime_appearances);

  }
    else if (msg.content === "Pikachu.Lore") {
    msg.channel.send(Pokemon.Pikachu.Lore_and_Background);

  }
    else if (msg.content === "Greninja.Tier") {
    msg.channel.send(Pokemon.Greninja.Smogon_Tier);

  }
    else if (msg.content === "Greninja.Pokedex_Entries") {
    let indexG = Math.floor(Math.random() * Pokemon.Greninja.Pokedex_entries.length)
    msg.channel.send(Pokemon.Greninja.Pokedex_entries[indexG]);

  }
   else if (msg.content === "Greninja.Pokedex_Entries.All") {
    msg.channel.send(Pokemon.Greninja.Pokedex_entries);

  }
    else if (msg.content === "Greninja.Stats") {
    msg.channel.send(Pokemon.Greninja.Stats);

  }
    else if (msg.content === "Greninja.Appearance") {
    msg.channel.send(Pokemon.Greninja.Appearance);

  }
    else if (msg.content === "Greninja.Lore") {
    msg.channel.send(Pokemon.Greninja.Lore_and_Background);

  }
    else if (msg.content === "Greninja.Anime") {
    msg.channel.send(Pokemon.Greninja.Notable_Anime_appearances);

  }

    
    // msg.reply(arrays.Inspire_gifs)
   else  if (msg.author.bot) return
/*else if(Pokemon.Lucario.some(word => msg.content.includes(word))) {
  let index = Math.floor(Math.random() * Pokemon.Lucario.Pokedex_entries.length) 
  msg.channel.send(Pokemon.Lucario.Pokedex_entries[index]);
}*/
})


keepAlive();
client.login(process.env.TOKEN)