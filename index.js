import TelegramBot from "node-telegram-bot-api";
import fetch from "node-fetch";

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const CHANNEL_LINK = "https://t.me/your_channel_here";

bot.onText(/\/start(.*)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const subid = match[1]?.trim() || "no_subid";

  // ✅ постбек
  fetch(`http://ad.propellerads.com/conversion.php?aid=3519440&pid=&tid=103279&visitor_id=${subid}&payout=0`)
    .catch(() => {});

  // ✅ моментально відправляємо на канал
  bot.sendMessage(chatId, `👇 Приєднуйся\n${CHANNEL_LINK}`);
});

console.log("✅ Bot is running");
