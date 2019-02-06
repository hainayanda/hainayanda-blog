import * as express from 'express';
import { ProjectDao } from '../db/dto/project';
import { Project } from '../models/project';

export const projectApi = express.Router();

projectApi.get('/all', (req, resp) => {
    ProjectDao.instance.getAll((err, projRes) => {
        if(projRes == null) resp.status(500).send("Failed to get all projects")
        else {
            let jsonResp: Project[] = []
            projRes.forEach(proj => {
                jsonResp.push(Project.parsedFrom(proj))
            });
            resp.json(jsonResp)
        }
    })
})

projectApi.get('/:id', (req, resp) => {
    let id: string = req.params.id
    if(id == null) resp.status(500).send("Invalid Id")
    ProjectDao.instance.getById(id, (err, projRes) => {
        if(projRes == null) resp.status(500).send("Failed to get project with id:" + id)
        else {
            let jsonResp = Project.parsedFrom(projRes)
            resp.json(jsonResp)
        }
    })
})