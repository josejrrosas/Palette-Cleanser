const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createRoutes = require('./createRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/users', userRoutes);
router.use('/create', createRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;
