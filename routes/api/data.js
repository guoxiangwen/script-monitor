var express = require('express');
var router = express.Router();
let Err_msg = require('./../../model/message')
    /* GET users listing. */
router.get('/', (req, res, next) => {
    console.log(req.query.msg);
    console.log(req.query.url);
    console.log(req.query.row);
    console.log(req.query.col);
    // force: true will drop the table if it already exists
    Err_msg.sync().then(() => {
        // Table created
        return Err_msg.create({
            msg: req.query.msg,
            url: req.query.url,
            row: req.query.row,
            col: req.query.col
        });
    });
    Err_msg.findAll().then(msgs => {
        // console.log(msgs)
    });
    res.json({ msg: 'success' })
});

module.exports = router;