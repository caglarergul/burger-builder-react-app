import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-ce4af.firebaseio.com/'
});

export default instance;