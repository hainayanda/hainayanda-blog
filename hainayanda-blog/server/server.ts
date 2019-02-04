import * as express from 'express';
import * as http from 'http';
import { Utils }  from './utils'
import { aboutApi } from './services/about-service'
import { homeApi } from './services/home-service'
import { pageApi } from './services/page-service'
import { projectApi } from './services/project-service'

const app = express()
const port = process.env.PORT || 3001

app.use('/api/about', aboutApi);
app.use('/api/home', homeApi);
app.use('/api/page', pageApi);
app.use('/api/project', projectApi);

app.use(express.static(Utils.outerDir() + '/dist/hainayanda-blog'));
app.get(/^\/(?!api)/, (req,res) => res.sendFile(Utils.outerDir() + '/dist/hainayanda-blog/index.html'));

const server = http.createServer(app);
server.listen(port, () => console.log('Running...'))