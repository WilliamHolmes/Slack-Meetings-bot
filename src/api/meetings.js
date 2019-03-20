const db = require('../../db');
const constants = require('../../src/constants')

const api = {
    create: obj => {
        return db.updateDOC(constants.db.DOCS.MEETINGS, { [obj.id]: obj })
    }
}

module.exports = api;