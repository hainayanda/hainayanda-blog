import * as express from 'express';
import * as http from 'http';
import { Utils }  from './utils'
import { aboutApi } from './services/about-service'
import { homeApi } from './services/home-service'
import { pageApi } from './services/page-service'
import { projectApi } from './services/project-service'

const app = express()
const port = process.env.PORT || 3001

app.use('/api/v1/about', aboutApi);
app.use('/api/v1/home', homeApi);
app.use('/api/v1/page', pageApi);
app.use('/api/v1/project', projectApi);

app.use(express.static(Utils.outerDir() + '/dist/hainayanda-blog'));
app.get(/^\/(?!api)/, (req,res) => res.sendFile(Utils.outerDir() + '/dist/hainayanda-blog/index.html'));

const server = http.createServer(app);
server.listen(port, () => console.log('Running...'))