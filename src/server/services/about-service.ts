import * as express from 'express';
import { SkillDao } from '../db/dto/skill';
import { PageDao } from '../db/dto/page';
import { Skills } from '../models/skills';
import { MainPage } from '../models/page';
import { ExperienceDao } from '../db/dto/experience';
import { Experience } from '../models/experience';

export const aboutApi = express.Router();

aboutApi.get('/skills', (_, resp) => {
    SkillDao.instance.getAll((_err, skillRes) => {
        if (skillRes == null) { resp.status(500).send('Failed to get skills'); } else {
            PageDao.instance.getOneByFilterQuery({'page': 'programming-language'}, (_err, pageRes) => {
                if (pageRes == null) { resp.status(500).send('Failed to get skills page'); } else {
                    const respJson = Skills.parseFrom(pageRes, skillRes);
                    resp.json(respJson);
                }
            });
        }
    });
});

aboutApi.get('/page', (_req, resp) => {
    PageDao.instance.getOneByFilterQuery({'page': 'about'}, (_err, pageRes) => {
        if (pageRes == null) { resp.status(500).send('Failed to get about page'); } else {
            const respJson = MainPage.parsedFrom(pageRes);
            resp.json(respJson);
        }
    });
});

aboutApi.get('/exp', (_req, resp) => {
    ExperienceDao.instance.getAll((_err, expRes) => {
        if (expRes == null) { resp.status(500).send('Failed to get experiences'); } else {
            const respJson: Experience[] = [];
            expRes.forEach(exp => {
                respJson.push(Experience.parsedFrom(exp));
            });
            resp.json(respJson);
        }
    });
});
