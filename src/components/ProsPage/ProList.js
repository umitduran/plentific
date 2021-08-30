import React, { useState, useEffect, useContext } from "react";
import { Table, Tag, Rate, message } from "antd";
import "antd/dist/antd.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Store } from "../../context/Store";
import { postProList } from "../../api/ProAPI";

export const ProList = () => {
  const [store, dispatch] = useContext(Store);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProList();
  }, [store.category, store.postCode, currentPage]);

  const getProList = async () => {
    const { category, postCode } = store;
    if (category && postCode) {
      setLoading(true);
      const offset = (currentPage - 1) * pageSize;
      const response = await postProList({
        offset,
        limit: pageSize,
        category_id: store.category,
        postCode: store.postCode,
      });
      if (response.error) {
        message.error({
          content: response.error,
          className: "custom-class",
          style: {
            marginTop: "20vh",
          },
        });
      } else {
        setTotal(parseInt(response.count));
        dispatch({
          type: "GET_PRO_LIST",
          payload: response.pros,
        });
      }
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Postcode",
      dataIndex: "main_address",
      key: "main_address",
      render: (address) => {
        return (
          <Tag color="blue" size={"small"} icon={<EnvironmentOutlined />}>
            {address?.postcode}
          </Tag>
        );
      },
    },
    {
      title: "Rewiew Rating",
      key: "review_rating",
      dataIndex: "review_rating",
      render: (rating) => (
        <Rate allowHalf value={rating} style={{ height: "20px" }} />
      ),
    },
  ];

  const pagination = {
    size: "small",
    total: total,
    pageSize: pageSize,
    current: currentPage,
    onChange: (page) => {
      setCurrentPage(page);
    },
  };

  return (
    <Table
      size="small"
      loading={loading}
      hideOnSinglePage
      columns={columns}
      rowKey={(pro) => pro.id}
      showHeader
      title={() => <>Total: ({total})</>}
      pagination={pagination}
      dataSource={store?.proList}
      style={{ paddingLeft: "50px", paddingRight: "50px" }}
    />
  );
};
