import React,{useContext} from 'react';
import api from './APIUtils';
import {Store} from '../context/Store';

export const getCategoryList = () => api("api_v1").get('/categories/all.json').then((data) => data);

