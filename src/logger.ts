import * as winston from 'winston';
import * as morgan from 'morgan';

export let logger: winston.LoggerInstance = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/server.log.json',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

export let loggerStream: morgan.StreamOptions = {
    write: logger.info
};