const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'meminfo',

  execute (context) {    
    context.source.sendFeedback('4 core cpu', false)
    context.source.sendFeedback('16 GB of ram', false)
    context.source.sendFeedback('32 GB of storage', false)
    context.source.sendFeedback('Running on github codespaces website', false)
    context.source.sendFeedback('Device: Dell Chromebook 3100 with 2 GB of ram and 15 GB of storage and intel r celeron r dual core cpu :skull:', false)

}
}
