import axios from 'axios';

export const httpService = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});