import * as express from 'express';
import { PageDao } from '../db/dto/page';
import { MainPage } from '../models/page';

export const homeApi = express.Router();

homeApi.get('/page', (req, resp) => {
    PageDao.instance.getByUniqueFieldName('page', 'home', (err, pageRes) => {
        if (pageRes == null) resp.status(500).send(err)
        else {
            let respJson = MainPage.parsedFrom(pageRes)
            resp.send(respJson)
        }
    })
})