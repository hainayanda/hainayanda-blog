import * as express from 'express';
import { PageDao } from '../db/dto/page';
import { FooterPage } from '../models/page';
import { UserDao } from '../db/dto/user';
import { ExternalLinksDao } from '../db/dto/externallinks';
import { ExternalLinks } from '../models/external.links';

export const pageApi = express.Router();

pageApi.get('/footer', (req, resp) => {
    UserDao.instance.getByUniqueFieldName('name', 'Nayanda Haberty', (err, userRes) => {
        if (userRes == null) resp.status(500).send(err)
        else {
            PageDao.instance.getByUniqueFieldName('page', 'home', (err, pageRes) => {
                if (pageRes == null) resp.status(500).send(err)
                else {
                    let respJson = FooterPage.parsedUsing(pageRes, userRes)
                    resp.send(respJson)
                }
            })
        }
    })
})

pageApi.get('/extlinks', (req, resp) => {
    ExternalLinksDao.instance.getAll((err, extRes) => {
        if(extRes == null) resp.status(500).send(err)
        else {
            let respJson = ExternalLinks.parsedFrom(extRes)
            resp.send(respJson)
        }
    })
})