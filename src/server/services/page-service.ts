import * as express from 'express';
import { PageDao } from '../db/dto/page';
import { FooterPage } from '../models/page';
import { UserDao } from '../db/dto/user';
import { ExternalLinksDao } from '../db/dto/externallinks';
import { ExternalLinks } from '../models/external.links';

export const pageApi = express.Router();

pageApi.get('/footer', (req, resp) => {
    UserDao.instance.getOneByFilterQuery({'name': 'Nayanda Haberty'}, (err, userRes) => {
        if (userRes == null) { resp.status(500).send('Failed to get user'); } else {
            PageDao.instance.getOneByFilterQuery({'page': 'footer'}, (_err, pageRes) => {
                if (pageRes == null) { resp.status(500).send('Failed to get footer data'); } else {
                    const respJson = FooterPage.parsedUsing(pageRes, userRes);
                    resp.json(respJson);
                }
            });
        }
    });
});

pageApi.get('/extlinks', (req, resp) => {
    ExternalLinksDao.instance.getAll((err, extRes) => {
        if (extRes == null) { resp.status(500).send('Failed to get external links'); } else {
            const respJson = ExternalLinks.parsedFrom(extRes);
            resp.json(respJson);
        }
    });
});
