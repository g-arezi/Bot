const { canModifyQueue } = require("../util/GsaBotUtil");

module.exports = {
  name: "loop",
  aliases: ['l'],
  description: "Escolha a musica pra loop",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`Loop ativo ${queue.loop ? "**on**" : "**off**"}`)
      .catch(console.error);
  }
};
