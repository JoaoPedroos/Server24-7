require('dotenv').config()
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.MC_USERNAME || 'MeuBotAFK',
  auth: 'offline', // IMPORTANTE para servidores pirata
  version: false,  // auto detecta a versão do servidor
})