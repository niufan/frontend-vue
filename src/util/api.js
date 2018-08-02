import ajax from './ajax'

const api = {
    user: {
        login({username, password}) {
            return ajax.post('/user/login', {'username': username, 'password': password});
        },
        query(params) {
            return ajax.get('/user', {'params': params})
        },
        add(user) {
            return ajax.post('/user', user);
        },
        modify(user) {
            return ajax.patch('/user', user);
        },
        get(id) {
            return ajax.get('/user/' + id);
        },
        remove(id) {
            return ajax.delete('/user/' + id);
        }
    },


};

export default api;