const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.MC_HOST || 'localhost',
  port: parseInt(process.env.MC_PORT) || 25565,
  username: process.env.MC_USERNAME || 'CoolifyBot'
});

bot.on('spawn', () => console.log('Bot successfully joined the server!'));
bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot disconnected, reconnecting...'));
