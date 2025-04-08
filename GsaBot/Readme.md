# GsaBot

GsaBot é um bot para Discord com múltiplas funcionalidades, incluindo administração de servidores, comandos de música e interações com usuários. Este README detalha o funcionamento de cada arquivo no projeto.

---

## Estrutura do Projeto

---

## Descrição dos Arquivos

### Arquivos Principais

- **`bot.js`**  
  Este é o arquivo principal do bot de administração. Ele contém:
  - Configuração do cliente Discord.
  - Eventos como `guildCreate`, `guildDelete`, e `guildMemberAdd`.
  - Comandos administrativos, como `!ping`, `!userinfo`, `!clear`, `!ban`, `!kick`, entre outros.
  - Integração com APIs externas, como `weather-js` para informações meteorológicas.

- **`config.json`**  
  Contém as configurações básicas do bot, como o prefixo dos comandos (`!`) e o token de autenticação.

- **`package.json`**  
  Gerencia as dependências do projeto, como `discord.js`, `weather-js`, e `ytdl-core`.

- **`start.bat`**  
  Um script para iniciar o bot principal (`bot.js`) em um ambiente Windows.

---

### Diretório `GsaBotMusic`

Este diretório contém o bot de música, que é separado do bot principal.

- **`index.js`**  
  Arquivo principal do bot de música. Ele:
  - Configura o cliente Discord para comandos de música.
  - Carrega os comandos do diretório `commands/`.
  - Gerencia eventos como `ready`, `warn`, e `error`.

- **`config.json`**  
  Configurações específicas do bot de música, como o token, prefixo (`/`), e chave da API do YouTube.

- **`creditos.md`**  
  Um arquivo de créditos que menciona a base do projeto e as bibliotecas utilizadas.

- **`package.json`**  
  Gerencia as dependências do bot de música, como `discord.js` e `simple-youtube-api`.

- **`start.bat`**  
  Um script para iniciar o bot de música (`index.js`) em um ambiente Windows.

---

### Diretório `commands/`

Contém os comandos do bot de música. Cada arquivo implementa um comando específico:

- **`help.js`**  
  Exibe uma lista de comandos disponíveis para o bot de música.

- **`play.js`**  
  Reproduz músicas do YouTube. Suporta links diretos e buscas por nome.

- **`playlist.js`**  
  Reproduz playlists do YouTube.

- **`pause.js`**  
  Pausa a música atualmente em reprodução.

- **`resume.js`**  
  Retoma a música pausada.

- **`skip.js`**  
  Pula para a próxima música na fila.

- **`skipto.js`**  
  Pula para uma música específica na fila.

- **`stop.js`**  
  Para a reprodução de música e limpa a fila.

- **`queue.js`**  
  Exibe a fila de músicas.

- **`volume.js`**  
  Ajusta o volume da música.

- **`loop.js`**  
  Ativa ou desativa o modo de repetição para a música atual.

- **`shuffle.js`**  
  Embaralha a fila de músicas.

- **`remove.js`**  
  Remove uma música específica da fila.

- **`nowplaying.js`**  
  Exibe informações sobre a música atualmente em reprodução.

- **`search.js`**  
  Permite buscar músicas no YouTube e adicioná-las à fila.

- **`pruning.js`**  
  Alterna a remoção de mensagens do bot para manter o chat limpo.

---

### Diretório `include/`

- **`play.js`**  
  Contém a lógica principal para reproduzir músicas no canal de voz. Gerencia eventos como término da música e erros.

---

### Diretório `util/`

- **`GsaBotUtil.js`**  
  Contém funções utilitárias, como `canModifyQueue`, que verifica se o usuário tem permissão para modificar a fila de músicas.

---

### Arquivos de Configuração

- **`.gitignore`**  
  Lista arquivos e diretórios que não devem ser incluídos no controle de versão, como `node_modules/` e `config.json`.

- **`.prettierrc`**  
  Configuração para o Prettier, uma ferramenta de formatação de código.

---

## Como Usar

1. **Instale as dependências**  
   Execute `npm install` nos diretórios `GsaBot/` e `GsaBotMusic/`.

2. **Configure os arquivos `config.json`**  
   Preencha os tokens e chaves de API necessários.

3. **Inicie os bots**  
   - Para o bot principal: execute `start.bat` no diretório `GsaBot/`.
   - Para o bot de música: execute `start.bat` no diretório `GsaBotMusic/`.

4. **Comandos**  
   - Use `!help` para comandos administrativos.
   - Use `/help` para comandos de música.

---

## Créditos

- Desenvolvido por **@xgsa**.
- Baseado no projeto [EvoBot](https://github.com/eritislami/evobot).
