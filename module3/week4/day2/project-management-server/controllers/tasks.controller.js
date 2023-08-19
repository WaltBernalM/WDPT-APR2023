const Task = require('../models/Task.model')
const Project = require('../models/Project.model')

const createTask = async (req, res, next) => {
    const { title, description, projectId } = req.body;
    try {

        const newTask = await Task.create({ title, description, projectId })
        await Project.findByIdAndUpdate(
            projectId,
            { $push: { tasks: newTask._id } }
        )
        res.status(201).json(newTask)

    } catch (error) {
        res.status(500).json(error)        
    }
}
module.exports = {
    createTask
}