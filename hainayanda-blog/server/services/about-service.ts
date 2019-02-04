import * as express from 'express';
import { SkillDao } from '../db/dto/skill';
import { PageDao } from '../db/dto/page';
import { Skill, Skills } from '../models/skills';
import { Page, MainPage } from '../models/page';
import { ExperienceDao } from '../db/dto/experience';
import { Experience } from '../models/experience';

export const aboutApi = express.Router();

aboutApi.get('/skills', (req, resp) => {
    SkillDao.instance.getAll((err, skillRes) => {
        if (skillRes == null) resp.status(500).send(err)
        else {
            PageDao.instance.getByUniqueFieldName('page', 'programming-language', (err, pageRes) => {
                if (pageRes == null) resp.status(500).send(err)
                else {
                    let respJson = Skills.parseFrom(pageRes, skillRes)
                    resp.send(respJson)
                }
            })
        }
    })
})

aboutApi.get('/page', (req, resp) => {
    PageDao.instance.getByUniqueFieldName('page', 'about', (err, pageRes) => {
        if (pageRes == null) resp.status(500).send(err)
        else {
            let respJson = MainPage.parsedFrom(pageRes)
            resp.send(respJson)
        }
    })
})

aboutApi.get('/exp', (req, resp) => {
    ExperienceDao.instance.getAll((err, expRes) => {
        if (expRes == null) resp.status(500).send(err)
        else {
            let respJson: Experience[] = []
            expRes.forEach(exp => {
                respJson.push(Experience.parsedFrom(exp))
            });
            resp.send(respJson)
        }
    })
})