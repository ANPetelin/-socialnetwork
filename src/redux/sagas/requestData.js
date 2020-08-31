
import axios from 'axios';

export default async function (url) {
    return axios.get(url);    
}