var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.status(200).send({
        token: '1q2w3e4r',
        msg: 'success'
    });
});

module.exports = router;