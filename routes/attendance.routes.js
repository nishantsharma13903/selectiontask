const router = require('express').Router();
const ctrl = require('../controllers/attendance.controller');
router.post('/', ctrl.mark);
router.get('/', ctrl.getAll);
module.exports = router;