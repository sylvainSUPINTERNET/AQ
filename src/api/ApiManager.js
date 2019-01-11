export default class ApiManager {

    //refer to lairAPI ./server/config.json
    restApiRoot = "/api";
    host = "127.0.0.1";
    port = 4999;

    constructor() {
    }

    /**
     * @returns {string}
     */
    getRestApiRoot() {
        return this.restApiRoot;
    }

    /**
     * @returns {string}
     */
    getHost() {
        return this.host;
    }

    /**
     * @returns {string}
     */
    getPort() {
        return this.port;
    }


    /**
     * @returns {string}
     */
    getApiBaseUrl() {
        return `http://${this.getHost()}:${this.getPort()}${this.getRestApiRoot()}`
    }
}