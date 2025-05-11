const router = require('express').Router();
const ctrl = require('../controllers/leave.controller');
router.post('/', ctrl.apply);
router.get('/', ctrl.getAll);
module.exports = router;