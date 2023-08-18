const fs = require('fs');
import { exit } from 'process';
import OvenMediaEngineSDK from '../src';

const baseURL = process.env.OME_BASE_URL;
const accessToken = process.env.OME_ACCESS_TOKEN;

if (!baseURL || !accessToken) {
    console.log('PLEASE PROVIDE process.env.OME_BASE_URL and process.env.OME_ACCESS_TOKEN');
    exit(1);
}

const omeSDK = new OvenMediaEngineSDK({ baseURL: process.env.OME_BASE_URL as string });

omeSDK.setAuthorization(process.env.OME_ACCESS_TOKEN as string)
omeSDK.setVersion('v1');

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function getVirtualHosts() {
    let res = await omeSDK.getVirtualHosts().catch(error => {
        console.log("Error:", error);
    });
    console.log('getVirtualHosts result:', res?.data);
}

async function createVirtualHost() {
    let data = fs.readFileSync('./samples/create-vhost.json');
    let res = await omeSDK.createVirtualHost(data).catch(error => {
        console.log("Error:", error);
    });
    console.log('createVirtualHost result:', res?.data);
}

async function getVirtualHost() {
    let res = await omeSDK.getVirtualHost('app').catch(error => {
        console.log("Error:", error);
    });
    console.log('getVirtualHost result:', res?.data);
}

async function deleteVirtualHost() {
    let res = await omeSDK.deleteVirtualHost('vhost').catch(error => {
        console.log("Error:", error);
    });
    console.log('deleteVirtualHost result:', res?.data);
}

async function getApps() {
    let res = await omeSDK.getApps('default').catch(error => {
        console.log("Error:", error);
    });
    console.log('getVirtualHosts result:', res?.data);
}

async function createApp() {
    let data = fs.readFileSync('./samples/create-app.json');
    let res = await omeSDK.createApp('default', JSON.parse(data)).catch(error => {
        console.log("Error:", error);
    });
    console.log('createApp result:', res?.data);
}

async function getApp() {
    let res = await omeSDK.getApp('default', 'app').catch(error => {
        console.log("Error:", error);
    });
    console.log('getApp result:', res?.data);
}

async function patchApp() {
    let data = fs.readFileSync('./samples/patch-app.json');
    let res = await omeSDK.patchApp('default', 'test', JSON.parse(data)).catch(error => {
        console.log("Error:", error);
    });
    console.log('patchApp result:', res?.data);
}

async function deleteApp() {
    let res = await omeSDK.deleteApp('default', 'test').catch(error => {
        console.log("Error:", error);
    });
    console.log('deleteApp result:', res?.data);
}

async function getOutputProfiles() {
    let res = await omeSDK.getOutputProfiles('default', 'test').catch(error => {
        console.log("Error:", error);
    });
    console.log('getOutputProfiles result:', res?.data);
}

async function createOutputProfile() {
    let data = fs.readFileSync('./samples/create-output-profile.json');
    let res = await omeSDK.createOutputProfile('default', 'test', JSON.parse(data)).catch(error => {
        console.log("Error:", error);
    });
    console.log('createOutputProfiles result:', res?.data);
}

async function getOutputProfile() {
    let res = await omeSDK.getOutputProfile('default', 'test', 'bypass_profile').catch(error => {
        console.log("Error:", error);
    });
    console.log('getOutputProfile result:', res?.data);
}

async function deleteOutputProfile() {
    let res = await omeSDK.deleteOutputProfile('default', 'test', 'bypass_profile').catch(error => {
        console.log("Error:", error);
    });
    console.log('deleteOutputProfile result:', res?.data);
}

async function startRecording() {
    let data = fs.readFileSync('./samples/start-recording.json');
    let res = await omeSDK.startRecording('default', 'app', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('startRecording result:', res?.data);
}

async function stopRecording() {
    let data = fs.readFileSync('./samples/stop-recording.json');
    let res = await omeSDK.stopRecording('default', 'app', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('stopRecording result:', res?.data);
}

async function getRecordingState() {
    let res = await omeSDK.getRecordingState('default', 'app').catch(error => {
        console.log("Error:", error);
    });
    console.log('getRecordingState result:', res?.data);
}

async function startPushPublishing() {
    let data = fs.readFileSync('./samples/start-push-publishing.json');
    let res = await omeSDK.startPushPublishing('default', 'app', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('startPushPublishing result:', res?.data);
}

async function stopPushPublishing() {
    let data = fs.readFileSync('./samples/stop-push-publishing.json');
    let res = await omeSDK.stopPushPublishing('default', 'app', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('stopPushPublishing result:', res?.data);
}

async function getPushPublishingState() {
    let res = await omeSDK.getPushPublishingState('default', 'app').catch(error => {
        console.log("Error:", error);
    });
    console.log('getPushPublishingState result:', res?.data);
}

async function getStreams() {
    let res = await omeSDK.getStreams('default', 'app').catch(error => {
        console.log("Error:", error);
    });
    console.log('getStreams result:', res?.data);
}

async function createStream() {
    let data = fs.readFileSync('./samples/create-stream.json');
    let res = await omeSDK.createStream('default', 'app', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('getStreams result:', res?.data);
}

async function getStream() {
    let res = await omeSDK.getStream('default', 'app', 'live').catch(error => {
        console.log("Error:", error);
    });
    console.log('getStream result:', res?.data);
}

async function deleteStream() {
    let res = await omeSDK.deleteStream('default', 'app', 'live').catch(error => {
        console.log("Error:", error);
    });
    console.log('deleteStream result:', res?.data);
}

async function sendEvent() {
    let data = fs.readFileSync('./samples/send-event.json');
    let res = await omeSDK.sendEvent('default', 'app', 'live', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('sendEvent result:', res?.data);
}

async function startDump() {
    let data = fs.readFileSync('./samples/start-hls-dump.json');
    let res = await omeSDK.startDump('default', 'app', 'live', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('startDump result:', res?.data);
}

async function stopDump() {
    let data = fs.readFileSync('./samples/stop-hls-dump.json');
    let res = await omeSDK.stopDump('default', 'app', 'live', data).catch(error => {
        console.log("Error:", error);
    });
    console.log('stopDump result:', res?.data);
}

async function getVirtualHostStatistics() {
    let res = await omeSDK.getVirtualHostStatistics('default').catch(error => {
        console.log("Error:", error);
    });
    console.log('getVirtualHostStatistics result:', res?.data);
}

async function getApplicationStatistics() {
    let res = await omeSDK.getApplicationStatistics('default', 'app').catch(error => {
        console.log("Error:", error);
    });
    console.log('getApplicationStatistics result:', res?.data);
}

async function getStreamStatistics() {
    let res = await omeSDK.getStreamStatistics('default', 'app', 'live').catch(error => {
        console.log("Error:", error);
    });
    console.log('getStreamStatistics result:', res?.data);
}

async function main() {
    
    //await getVirtualHosts();    
    //await createVirtualHost();
    //await getVirtualHost();

    //await getApps();
    //await createApp();
    //await getApp();
    //await patchApp();
    
    //await getOutputProfiles();
    //await createOutputProfile();
    //await getOutputProfile();

    /*await startRecording();
    await delay(2000);
    await getRecordingState();
    await delay(2000);
    await stopRecording();*/

    await getStreams();

    await getStream();

    startDump();
    await delay(10000);
    stopDump();

    //await deleteOutputProfile();
    //await deleteApp();
    //await deleteVirtualHost();
}

main();