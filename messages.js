const btns = require('./buttons')
const keyboards = require('./keyboards');
const inllineKeyboards = require('./inlineKeyboards')

const defaultOptions = {}
const defaultMarkdownOptions = { ...defaultOptions, parse_mode: "Markdown"}

module.exports = {
  [btns.hello] :{
    text: "Hello, this is demo bot created for *Igor Karmanov*.\n\nDesigned by _Kusyka911_",
    options: {
      ...defaultMarkdownOptions,
      reply_markup: {
        keyboard: [Object.values(keyboards.main)]
      }
    }
  },
  [btns.conctacts]: {
    text: "Chose hotline please:",
    options: {
      ...defaultMarkdownOptions,
      reply_markup: {
        inline_keyboard: inllineKeyboards.concats.keyboard
      }
    }
  }
}