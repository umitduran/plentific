import api from './APIUtils';

export const getCategories = () => api("api_v1").get('/categories/all.json').then(({ data }) => data);
