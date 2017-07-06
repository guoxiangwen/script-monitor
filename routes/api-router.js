/*api-router.js*/
var express = require('express'),
    router = express.Router();




//router.use('/user', user);
router.use('/login', require('./api/login'));
router.use('/data', require('./api/data'));
router.use('/markdown', require('./api/markdown'));





module.exports = router;