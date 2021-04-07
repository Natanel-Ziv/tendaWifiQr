import logger from './framework/logger';
import {app} from './app';
import {port} from './framework/environments';

app.listen(port, () => {
  logger.info(`App started on port: ${port}`);
});
