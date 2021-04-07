import path from 'path';
import * as dotenv from 'dotenv';
import express from 'express';
import jsonErrorHandler from 'express-json-error-handler';
import {routes} from './routes';


dotenv.config();

export const app = express();

/* Init middleware */
app.use(express.urlencoded({
  extended: false
}));
app.use(jsonErrorHandler());

/* Init routes */
app.use('/api/v1', routes());
app.use('/', express.static(path.resolve(__dirname, 'public')));
