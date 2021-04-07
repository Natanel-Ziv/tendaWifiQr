import 'dotenv/config';
import env from 'env-var';

export const routerURL = env.get('ROUTER_URL')
  .required()
  .asString();

export const port = env.get('PORT').asPortNumber() ?? 3000;
