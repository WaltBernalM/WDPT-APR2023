const mongoose = require('mongoose');
const Project = require('../models/Project.model');

const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project
        .find()
        .populate('tasks')
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json(error)
    }
} 


const createProject = async (req, res, next) => {
    const { title, description } = req.body;
    try {
        const newProject = await Project.create({title, description, tasks: []})
        res.status(201).json(newProject)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getOneProject = async (req, res, next) => {
    const { projectsId } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(projectsId)) {
            res.status(400).json({ message: 'El id que mandaste no es valido'})
            return
        }
        const project = await Project.findById(projectsId)
        .populate('tasks')

        res.status(200).json(project)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateProject = (req, res, next) => {
    const { projectsId } = req.params;
    try {
    
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteProject = async (req, res, next) => {
    const { projectsId } = req.params;    
    try {
        if(!mongoose.Types.ObjectId.isValid(projectsId)) {
            res.status(400).json({ message: 'El id que mandaste no es valido'})
            return
        }

        await Project.findByIdAndRemove(projectsId)
        res.status(200).json({ message: `El proyecto con id ${projectsId} fue eliminado con exito` })
    } catch (error) {
        res.status(500).json(error)
    }}


module.exports = {
    getAllProjects,
    createProject,
    getOneProject,
    updateProject,
    deleteProject
};