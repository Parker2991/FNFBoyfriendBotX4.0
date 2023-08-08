const util = require('util')

const COMMANDSPY_ENABLED_MESSAGE = { text: 'Successfully enabled CommandSpy' }
const COMMANDSPY_DISABLED_MESSAGE = { text: 'Successfully disabled CommandSpy' }

function inject (bot) {
  let commandSpyEnabled = false

  bot.on('message', message => {
    if (util.isDeepStrictEqual(message, COMMANDSPY_ENABLED_MESSAGE)) commandSpyEnabled = true
    else if (util.isDeepStrictEqual(message, COMMANDSPY_DISABLED_MESSAGE)) commandSpyEnabled = false
  })

  let timer

  bot.on('packet.login', () => {
   timer = setInterval(() => {
      
    }, 500)
  })

  bot.on('end', () => {
    commandSpyEnabled = false
    if (timer) clearInterval(timer)
  })
}

module.exports = inject

// Real auto cspy. Look for "Successfully disabled CommandSpy". If we see it then  do in chat "/commandspy:commandspy on" sus
//ohio