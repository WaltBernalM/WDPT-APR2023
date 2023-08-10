const { Router } = require('express');
const { createTask } = require('../controllers/tasks.controller');
const router = Router();

// /api/tasks
router.post('/', createTask)

module.exports = router;