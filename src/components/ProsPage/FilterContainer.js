import React, { useState, useEffect, useContext } from "react";
import { Store } from "../../context/Store";
import { getCategoryList } from "../../api/CategoryAPI";
import { Select, Input, Button, Space } from "antd";
import "antd/dist/antd.css";

export const FilterContainer = () => {
  const [store, dispatch] = useContext(Store);
  const [category, setCategory] = useState("");
  const [postCode, setPostCode] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const categories = await getCategoryList();
    dispatch({
      type: "GET_CATEGORY_LIST",
      payload: categories.filter((cat) => cat.hidden === false),
    });
  };

  return (
    <Space>
      <Select
        showSearch
        style={{ width: 200 }}
        size="small"
        onChange={(category) => {
          setCategory(category);
        }}
        placeholder="Select a category"
      >
        {store?.categoryList.map((category) => (
          <Select.Option key={category?.id} value={category?.id}>
            {category?.name}
          </Select.Option>
        ))}
      </Select>

      <Input
        size="small"
        placeholder="Enter PostCode"
        value={postCode}
        onChange={(e) => {
          setPostCode(e.target.value.toLowerCase());
        }}
      />

      <Button
        type={"primary"}
        size={"small"}
        onClick={() =>
          dispatch({
            type: "SET_FILTER_PARAMS",
            payload: {
              category,
              postCode,
            },
          })
        }
      >
        Submit
      </Button>
    </Space>
  );
};
