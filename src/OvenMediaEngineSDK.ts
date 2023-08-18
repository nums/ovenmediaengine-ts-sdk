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
    
    async getVirtualHost(): Promise<AxiosResponse> {
        return this.api.get('/vhosts');
    }

}

