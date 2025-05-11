const router = require('express').Router();
const ctrl = require('../controllers/location.controller');
router.post('/', ctrl.create);
router.get('/:id', ctrl.getByEmployee);
module.exports = router;