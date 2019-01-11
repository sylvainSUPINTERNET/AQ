import ApiManager from './ApiManager';
import axios from 'axios';

class UserApi extends ApiManager {

    constructor() {
        super();
    }


    getUsers() {
        console.log("GET users todo");
        axios
            .get(`${this.getApiBaseUrl()}/Users`, {headers: {Authorization: 'Bearer AADBRJgztPn3tA6A38v2potg4vMRBbTXvMnj8Z7ghY5T0DhcfyH23ojw0lu92d6M'}})
            .then(function (users) {
                console.log("USERS", users)
            })
            .catch(err => console.log('users GET -> err', err))
    }
}


export default new UserApi();