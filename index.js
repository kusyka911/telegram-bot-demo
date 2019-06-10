const TelegramBot = require('node-telegram-bot-api');
const messages = require('./messages');
const buttons = require('./buttons');
const callbacks = require('./callbacks')

// replace the value below with the Telegram token you receive from @BotFather
const token = '335532408:AAExN1x27lmJOzsPOARsugrYgaenCELfbl8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, messages[buttons.hello].text, messages[buttons.hello].options);
});

bot.on('text', (msg) => {
  const chatId = msg.chat.id;
  const answer = messages[msg.text];
  if (answer) {
    bot.sendMessage(chatId, answer.text, answer.options);
  }
})

bot.on('callback_query', (query) => {
  const {data, message} = query;
  const cb = callbacks[data];
  if (cb) {
    const options = {
      chat_id: message.chat.id,
      message_id: message.message_id,
      ...cb.options
    };
    Promise.resolve(bot.editMessageText(cb.text, options));
  }
})