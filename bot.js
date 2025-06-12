const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'vitor1409.aternos.me',  // Ex: 'play.meuserver.com'
  port: 25565,             // Padrão do Minecraft
  username: 'BotAFK',      // Nome do bot
  version: false           // Auto detectar versão
});

bot.on('spawn', () => {
  console.log('Bot entrou no servidor.');
});
