import * as express from 'express';

const app: express.Application = express();

app.listen(8080, () => { console.log('Starter server listening on port 8080'); });
