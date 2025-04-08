const { canModifyQueue } = require("../util/GsaBotUtil");

module.exports = {
  name: "pause",
  description: "Pausa a musica que está tocando",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Não está tocando musica no momento.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ a musica foi pausada.`).catch(console.error);
    }
  }
};
