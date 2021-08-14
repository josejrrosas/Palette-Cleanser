const router = require('express').Router();
// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const createRoutes = require('./createRoutes');
const userRoutes = require('./api/userRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.use('/create', createRoutes);
router.use('/login', userRoutes);

module.exports = router;