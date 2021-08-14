const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('create');
});

module.exports = router;