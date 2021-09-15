import axios from "axios";

const selectApi = (baseUrl) => {
    return baseUrl === "api_v1"
        ? process.env.REACT_APP_GET_API_URL_V1
        : process.env.REACT_APP_GET_API_URL_V2;
};

const api = (baseUrl, header) =>
    axios.create({
        baseURL: selectApi(baseUrl),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...header,
        },
    });

export default api;
