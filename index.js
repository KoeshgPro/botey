const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || '162.55.241.186',
    port: parseInt(process.env.MC_PORT) || 13904,
    username: process.env.MC_USERNAME || 'KoeshMBOT'
  });

  bot.on('spawn', () => {
    console.log('✅ دخل البوت KoeshMBOT إلى السيرفر بنجاح!');
  });

  bot.on('error', err => console.log('❌ خطأ في الاتصال:', err.message));
  
  bot.on('end', reason => {
    console.log('⚠️ تم فصل البوت، سيتم إعادة الاتصال بعد 5 ثوانٍ... السبب:', reason);
    setTimeout(createBot, 5000);
  });
}

createBot();

// منع الحاوية من الإغلاق
setInterval(() => {}, 10000);
