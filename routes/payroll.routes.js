const router = require('express').Router();
const ctrl = require('../controllers/payroll.controller');
router.post('/', ctrl.generate);
router.get('/', ctrl.getAll);
module.exports = router;