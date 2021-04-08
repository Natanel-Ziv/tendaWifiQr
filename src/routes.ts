import type {Request, Response} from 'express';
import express from 'express';
import {getQRCodeSVG} from './functions/main';

export const router = express.Router();

export const routes = (): express.Router => {
  router.get('/', async (_req: Request, _res: Response) => {
    const qr = await getQRCodeSVG();

    _res.send(`
    <html>
      <body>
        <style type='text/css'>
          .container {
              position:relative;
              width:50%;/*half the width of the whole page*/
              margin:auto;/*center the whole thing*/
          }
          .set_height {
              position:relative;
              float:left;
              width:50%;
              height:50%;
          }
        </style>
        <div class='container'>
          <div class='set_height'>
            <h1 style="text-align:center"> ZivNet QR: </h1>
              ${qr}
          </div>
        </div>
      </body>
    </html>`);
  });

  return router;
};
