import axios from 'axios'

const ajax = axios.create({
    timeout: 5000
});

export default ajax;