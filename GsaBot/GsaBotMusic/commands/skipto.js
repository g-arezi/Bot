const { canModifyQueue } = require("../util/GsaBotUtil");

module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "Ir para o número da fila selecionado",
  execute(message, args) {
    if (!args.length) return message.reply(`Use: ${message.client.prefix}${name} <Número da fila>`);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Não há fila.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.songs = queue.songs.slice(args[0] - 2);
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ foi pulado ${args[0] - 1} videos ou musicas`).catch(console.error);
  }
};
