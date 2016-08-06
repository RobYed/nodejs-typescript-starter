import * as express from 'express';
import * as logger from 'winston';

let app: express.Application = express();

app.listen(8080, () => { logger.info('Starter server listening on port 8080'); });
