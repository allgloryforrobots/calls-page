import axios from 'axios';

const API_URL = 'https://api.skilla.ru/mango/';
const TOKEN = 'testtoken';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
});

export const getCalls = (params: { dateStart?: string; dateEnd?: string; type?: string; sort?: string }) => {
    return api.post('/getList', { params });
};