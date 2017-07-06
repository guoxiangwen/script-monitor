let Sequelize = require('sequelize');
let sequelize = require('./../config/db.js')

const Err_msg = sequelize.define('err_msg', {
    msg: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    row: {
        type: Sequelize.STRING
    },
    col: {
        type: Sequelize.STRING
    }
});



module.exports = Err_msg;