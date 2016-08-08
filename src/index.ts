// external imports
import * as express from 'express';
import * as morgan from 'morgan';

// internal imports
import { logger, loggerStream } from './logger';

// create express app instance
let app: express.Application = express();

// configure http request logging
app.use( morgan( 'combined', { stream: loggerStream } ) );

// configure serving client as static files
app.use( express.static('public') );

// start the server
app.listen(8080, () => { logger.info('Starter server listening on port 8080'); });