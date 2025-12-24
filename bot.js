const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Bot Online!');
};

const server = http.createServer(requestListener);
const port = process.env.PORT || 8000;

// Tenta ligar o servidor, se a porta estiver ocupada, ele não crasha o bot
server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor de verificação rodando na porta ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`A porta ${port} já está em uso. O bot continuará rodando, mas o Koyeb pode reclamar do Health Check.`);
  } else {
    console.error(err);
  }
});

require('dotenv').config()
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.MC_USERNAME,
  auth: 'offline',
  version: false
})
