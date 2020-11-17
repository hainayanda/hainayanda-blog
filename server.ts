import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import {join} from 'path';
import { aboutApi } from './src/server/services/about-service';
import { homeApi } from './src/server/services/home-service';
import { pageApi } from './src/server/services/page-service';
import { projectApi } from './src/server/services/project-service';

enableProdMode();

const enforce = require('express-sslify');
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

app.get(/^\/(?!api)/, (req, res) => {
  res.render('index', { req });
});

app.use('/api/v1/about', aboutApi);
app.use('/api/v1/home', homeApi);
app.use('/api/v1/page', pageApi);
app.use('/api/v1/project', projectApi);

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
