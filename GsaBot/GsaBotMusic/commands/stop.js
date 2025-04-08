const { canModifyQueue } = require("../util/GsaBotUtil");


module.exports = {
  name: "stop",
  description: "Parar a musica selecionada",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("Não há nada tocando.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ parou a música!`).catch(console.error);
  }
};
