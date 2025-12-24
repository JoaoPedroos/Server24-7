const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Bot Online!');
  res.end();
}).listen(process.env.PORT || 8000); 

console.log("Servidor de verificação rodando!");

require('dotenv').config()
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.MC_USERNAME,
  auth: 'offline',
  version: false
})
