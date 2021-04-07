import type {Request, Response} from 'express';
import express from 'express';
import {getQRCode} from './functions/main';

export const router = express.Router();

export const routes = (): express.Router => {
  router.get('/', async (_req: Request, _res: Response) => {
    const qr = await getQRCode();

    const base64Data = qr.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    const img = Buffer.from(base64Data, 'base64');

    _res.end(img);
  });

  return router;
};
