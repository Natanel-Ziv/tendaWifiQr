/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import logger from '../framework/logger';
import {routerURL} from '../framework/environments';

const qrcode = require('wifi-qr-code-generator');

interface tendaAnswer {
  wifiBasicCfg: wifiBasicCfg;
}

interface wifiBasicCfg {
  wifiEn: boolean;
  wifiEn_5G: boolean;
  wifiHideSSID: boolean;
  wifiHideSSID_5G: boolean;
  wifiSSID: string;
  wifiSSID_5G: string;
  wifiSecurityMode: string;
  wifiSecurityMode_5G: string;
  wifiPwd: string;
  wifiNoPwd: false;
  wifiPwd_5G: string;
  wifiNoPwd_5G: boolean;
  HasDoubleBandUnity: boolean;
  doubleBandUnityEnable: boolean;
  wifiTotalEn: boolean;
}

export const getQRCode = async () => {
  const wifiDataResp = await axios.get(`${routerURL}`);
  const wifiData: tendaAnswer = wifiDataResp.data;
  const wifiCfg: wifiBasicCfg = wifiData.wifiBasicCfg;


  return qrcode.generateWifiQRCode({
    ssid: wifiCfg.wifiSSID,
    password: wifiCfg.wifiPwd,
    encryption: 'WPA',
    hiddenSSID: false,
    outputFormat: {type: 'image/png'}
  }).then((data: string) => {
    return data;
  })
    .catch((error: any) => {
      logger.error(error);
    });
};
