const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const profileRoutes = require('./userProfile-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/userProfile', profileRoutes);

module.exports = router;