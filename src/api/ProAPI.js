import React, { useContext } from "react";
import api from "./APIUtils";

export const postProList = (filter) => {
    const headers = {
        "x-pagination-offset": filter.offset,
        "x-pagination-limit": filter.limit
    };
  return api("api_v2", headers)
    .post("/public/pro/search-pros/", {
      category_id: filter.category_id,
      location: filter.postCode,
    })
    .then((resp) => {
        return {
            pros: resp.data.response.pros,
            count: resp.headers['x-pagination-count']
        };
    })
  .catch((error) => {
      return {
        error: error.message
      };
    });
};
