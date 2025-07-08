import axios from 'axios';
import {ENDPOINTS} from './enums';
import {TIMEOUT} from './constants';

export const apiInstance = axios.create({
  baseURL: ENDPOINTS.POKE_API,
  timeout: TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
