import { exit } from 'process';
import OvenMediaEngineSDK from '../src/OvenMediaEngineSDK';

const baseURL = process.env.OME_BASE_URL;
const accessToken = process.env.OME_ACCESS_TOKEN;

if(!baseURL || !accessToken) {
    console.log('PLEASE PROVIDE process.env.OME_BASE_URL and process.env.OME_ACCESS_TOKEN');
    exit(1);
}

const omeSDK = new OvenMediaEngineSDK({ baseURL: process.env.OME_BASE_URL as string });

omeSDK.setAuthorization(process.env.OME_ACCESS_TOKEN as string)
omeSDK.setVersion('v1');

omeSDK.getVirtualHost().then(response => {
    console.log(response.data);
}).catch(error => {
    console.error("Error:", error);
});