const example560 = require('./5.6.0/dist/index')
const example51112 = require('./5.11.12/dist/index')

example560.visitor.Program({ node: { body: ['test'] } })
example51112.visitor.Program({ node: { body: ['test'] } })