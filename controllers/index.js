const router = require('express').Router();
// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const createRoutes = require('./createRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.use('/create', createRoutes);

module.exports = router;