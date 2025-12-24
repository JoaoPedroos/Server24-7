const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Bot Online!');
  res.end();
}).listen(process.env.PORT || 8000); 

console.log("Servidor de verificação rodando!");

const axios = require('axios'); 

const URL_DO_APP = "https://bitter-aurea-alekdila1-f7aebf87.koyeb.app/"; 

setInterval(async () => {
  try {
    await axios.get(URL_DO_APP);
    console.log("Ping de atividade enviado com sucesso!");
  } catch (err) {
    console.error("Erro no auto-ping:", err.message);
  }
}, 300000); 

require('dotenv').config()
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.MC_USERNAME,
  auth: 'offline',
  version: false
})
