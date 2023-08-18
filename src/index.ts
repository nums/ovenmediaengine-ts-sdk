import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface OMEConfig {
    baseURL: string;
    timeout?: number;
}

export default class OvenMediaEngineSDK {

    private api: AxiosInstance;

    constructor(config: OMEConfig) {

        this.api = axios.create({
            baseURL: config.baseURL,
            timeout: config.timeout || 5000,
        });
    }

    setAuthorization(token: string) {
        const base64Token = Buffer.from(token).toString('base64');
        this.api.defaults.headers.common['Authorization'] = `Basic ${base64Token}`;
    }

    setVersion(version: string) {
        this.api.interceptors.request.use(config => {
          config.url = `${version}${config.url}`;
          return config;
        });
    }
    
    async getVirtualHosts(): Promise<AxiosResponse> {
        return this.api.get('/vhosts');
    }

    async createVirtualHost(vhostData: object): Promise<AxiosResponse> {
        return this.api.post('/vhosts', vhostData);
    }

    async getVirtualHost(vhost: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}`);
    }

    async deleteVirtualHost(vhost: string): Promise<AxiosResponse> {
        return this.api.delete(`/vhosts/${vhost}`);
    }

    async reloadAllCertificates(): Promise<AxiosResponse> {
        return this.api.delete(`/vhosts:reloadAllCertificates`);
    }

    async reloadAllCertificate(vhost: string): Promise<AxiosResponse> {
        return this.api.delete(`/vhosts/${vhost}:reloadCertificate`);
    }

    async getApps(vhost: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps`);
    }

    async createApp(vhost: string, appData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps`, appData);
    }

    async getApp(vhost: string, app: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps/${app}`);
    }

    async patchApp(vhost: string, app: string, appData: object): Promise<AxiosResponse> {
        return this.api.patch(`/vhosts/${vhost}/apps/${app}`, appData);
    }

    async deleteApp(vhost: string, app: string): Promise<AxiosResponse> {
        return this.api.delete(`/vhosts/${vhost}/apps/${app}`);
    }

    async getOutputProfiles(vhost: string, app: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps/${app}/outputProfiles`);
    }

    async createOutputProfile(vhost: string, app: string, profileData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}/outputProfiles`, profileData);
    }

    async getOutputProfile(vhost: string, app: string, profile: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps/${app}/outputProfiles/${profile}`);
    }

    async deleteOutputProfile(vhost: string, app: string, profile: string): Promise<AxiosResponse> {
        return this.api.delete(`/vhosts/${vhost}/apps/${app}/outputProfiles/${profile}`);
    }

    async startRecording(vhost: string, app: string, streamData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}:startRecord`, streamData);
    }

    async stopRecording(vhost: string, app: string, streamData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}:stopRecord`, streamData);
    }

    async getRecordingState(vhost: string, app: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps/${app}:records`);
    }

    async startPushPublishing(vhost: string, app: string, streamData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}:startPush`, streamData);
    }

    async stopPushPublishing(vhost: string, app: string, streamData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}:stopPush`, streamData);
    }

    async getPushPublishingState(vhost: string, app: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps/${app}:pushes`);
    }

    async getStreams(vhost: string, app: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps/${app}/streams`);
    }

    async createStream(vhost: string, app: string, streamData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}/streams`, streamData);
    }

    async getStream(vhost: string, app: string, stream: string): Promise<AxiosResponse> {
        return this.api.get(`/vhosts/${vhost}/apps/${app}/streams/${stream}`);
    }

    async deleteStream(vhost: string, app: string, stream: string): Promise<AxiosResponse> {
        return this.api.delete(`/vhosts/${vhost}/apps/${app}/streams/${stream}`);
    }

    async sendEvent(vhost: string, app: string, stream: string, eventData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}/streams/${stream}:sendEvent`, eventData);
    }

    async startDump(vhost: string, app: string, stream: string, dumpData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}/streams/${stream}:startHlsDump`, dumpData);
    }

    async stopDump(vhost: string, app: string, stream: string, dumpData: object): Promise<AxiosResponse> {
        return this.api.post(`/vhosts/${vhost}/apps/${app}/streams/${stream}:stopHlsDump`, dumpData);
    }

    async getVirtualHostStatistics(vhost: string) {
        return this.api.get(`/stats/current/vhosts/${vhost}`);
    }

    async getApplicationStatistics(vhost: string, app: string) {
        return this.api.get(`/stats/current/vhosts/${vhost}/apps/${app}`);
    }

    async getStreamStatistics(vhost: string, app: string, stream: string) {
        return this.api.get(`/stats/current/vhosts/${vhost}/apps/${app}/streams/${stream}`);
    }

}

