// external imports
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

// internal imports
import { router } from './router';
import { logger, loggerStream } from './logger';

// create express app instance
let app: express.Application = express();

// set http security headers
app.use( helmet() );

// register app routes
app.use( router );

// configure http request logging
app.use( morgan( 'combined', { stream: loggerStream } ) );

// configure serving client as static files
app.use( express.static('public') );

// start the server
app.listen(8080, () => { logger.info('Starter server listening on port 8080'); });