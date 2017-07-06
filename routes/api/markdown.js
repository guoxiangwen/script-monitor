var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.body);
    fs.readFile(path.join(__dirname, 'markdown.md'), 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            }
            res.set('Content-Type', 'text/html');
            res.status(200).send({ content: data });
        })
        // var md = ""
});

module.exports = router;