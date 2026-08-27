import initBot from "./bot.ts";
import initWeb from "./web.ts";

process.on('uncaughtException', err => {
        console.error(`Uncaught exception: ${err?.stack || err}`);
});
process.on('unhandledRejection', reason => {
        console.error(`Unhandled rejection: ${reason}`);
});

initBot();
initWeb();