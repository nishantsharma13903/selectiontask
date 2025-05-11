const router = require('express').Router();
const ctrl = require('../controllers/location.controller');
router.post('/', ctrl.create);
router.get('/get-location', ctrl.getByEmployee);
module.exports = router;