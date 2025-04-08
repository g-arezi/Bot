const { canModifyQueue } = require("../util/GsaBotUtil");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "Ignorar a música atualmente sendo reproduzida",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("Não há nada que eu possa pular para você.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ pulou a música`).catch(console.error);
  }
};
