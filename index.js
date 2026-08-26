const mineflayer = require('mineflayer');

const PASSWORD = process.env.MC_PASSWORD || '1234567789';

function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || '162.55.241.186',
    port: parseInt(process.env.MC_PORT) || 13904,
    username: process.env.MC_USERNAME || 'KoeshMBOT',
    checkTimeoutInterval: 60 * 1000
  });

  bot.on('spawn', () => {
    console.log('✅ دخل البوت KoeshMBOT إلى السيرفر بنجاح!');
    
    // إرسال حزم حركة خفيفة لإثبات الاتصال لـ Grim Anticheat
    setTimeout(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 200);
    }, 500);

    // تسجيل الدخول
    setTimeout(() => {
      bot.chat(`/login ${PASSWORD}`);
    }, 1200);
  });

  bot.on('error', err => console.log('❌ خطأ في الاتصال:', err.message));

  bot.on('end', reason => {
    console.log('⚠️ تم فصل البوت، إعادة الاتصال بعد 3 ثوانٍ... السبب:', reason);
    setTimeout(startBot, 3000);
  });
}

startBot();

setInterval(() => {}, 100000);
