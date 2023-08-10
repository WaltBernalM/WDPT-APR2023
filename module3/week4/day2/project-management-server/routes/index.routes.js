const router = require("express").Router();
const projectsRouter = require('./projects.routes')
const tasksRouter = require('./tasks.routes')
// protocolos de datos que pueden viajar por http:
// * XML
// * JSON
// * protobuffers


router.use('/projects', projectsRouter)
router.use('/tasks', tasksRouter)

module.exports = router;
