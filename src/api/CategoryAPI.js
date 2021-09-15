import api from "./APIUtils";

export const getCategoryList = () =>
    api("api_v1")
        .get("/categories/all.json")
        .then((resp) => resp.data);
