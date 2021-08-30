import React, { useState, useEffect, useContext } from "react";
import { Store } from "../../context/Store";
import { getCategoryList } from "../../api/CategoryAPI";
import { Layout, Row, Divider, Select, Input, Button, Space } from "antd";
import "antd/dist/antd.css";
import { Header } from "../../shared/components/Layout/Layout";
import { FilterContainer } from "./FilterContainer";
import { ProList } from "./ProList";
const { Content } = Layout;

export const ProsPage = () => {
  return (
    <>
      <Layout style={{height: "100%"}}>
        <Header />
        <Content style={{ padding: "20px", height: "100%" }}>
          <Row justify={"center"}>
            <FilterContainer />
          </Row>
          <Divider />
            <ProList />
        </Content>
      </Layout>
    </>
  );
};
