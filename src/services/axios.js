import axios from 'axios'
import store from 'store'
// let token = 'd72c702f-4d5d-47e5-aa94-c95cda3d6bc1'
export default {
    post(url, params, callback) {
        axios.post(url, params, {
            headers: {
                'X-Auth-Token': store.get('X-Auth-Token'),
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            callback(response.data, response.headers)
        }).catch((error) => {
            console.log(error);
        })
    },
    get(url, params, callback) {
        if (typeof (params) !== 'object') {
            axios.get(url + '/' + params, {
                headers: {
                    'X-Auth-Token': store.get('X-Auth-Token'),
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                callback(response.data)
            }).catch((error) => {
                console.log(error);
                // location.reload();
            })
        } else {
            axios.get(url, {
                params: params,
                headers: {
                    'X-Auth-Token': store.get('X-Auth-Token'),
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                callback(response.data, response.headers)
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    delete(url, callback) {
        axios.delete(url, {
            headers: {
                'X-Auth-Token': store.get('X-Auth-Token'),
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            callback(response.data)
        }).catch((error) => {
            console.log(error);
        })
    },
    put(url, params, callback) {
        axios.put(url, params, {
            headers: {
                'X-Auth-Token': store.get('X-Auth-Token'),
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            callback(response.data)
        }).catch((error) => {
            console.log(error);
        })
    },
    login(url, params, callback, token) {
        axios.post(url, params, {
            headers: {
                'Captcha-Code': token,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            callback(response.data, response.headers)
        }).catch((error) => {
            console.log(error);
        })
    }
}