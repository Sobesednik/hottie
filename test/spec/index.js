const { equal, assert } = require('zoroaster/assert')
const context = require('../context')
const hottie = require('../..')

const hottieTestSuite = {
    context,
    'should be a function'() {
        equal(typeof hottie, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            hottie()
        })
    },
}

module.exports = hottieTestSuite
