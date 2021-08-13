const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('homepage');
});

module.exports = router;