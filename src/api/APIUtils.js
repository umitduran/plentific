import axios from 'axios';

const selectApi = (baseUrl) => {
    debugger;
    console.log(baseUrl === "api_v1" ? process.env.REACT_APP_GET_API_URL_V1 : "v2");
    return baseUrl === "api_v1" ? process.env.REACT_APP_GET_API_URL_V1 : process.env.REACT_APP_GET_API_URL_V2
}

const api = (baseUrl) => axios.create({
    baseURL: selectApi(baseUrl),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default api;
