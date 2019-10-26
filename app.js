const Telegraf = require('telegraf')
const express = require('express')


const expressApp = express()


const bot = new Telegraf('545285051:AAHWkNHxDd_Wreb2IUukJ0_8WfVKogO9Ljo')
expressApp.use(bot.webhookCallback('/ruta-bot'))
bot.telegram.setWebhook('https://foolish-kangaroo-96.localtunnel.me')

bot.command('/test', ctx => {
    ctx.reply('Hola bot')
})

expressApp.post('ruta-bot', (req, res) => {
    res.send('Llamada a la ruta del bot')
})

expressApp.listen(3000, () => {
    console.log('el sever esta On');
})