const { canModifyQueue } = require("../util/GsaBotUtil");

module.exports = {
  name: "remove",
  description: "Remover música da fila",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Não há fila.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Use: ${message.client.prefix} remove <Numero fa fila>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Numero fa fila>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ Removi **${song[0].title}** da fila de musica`);
  }
};
