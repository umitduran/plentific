import React from "react";
import { Layout, Row, Divider } from "antd";
import "antd/dist/antd.css";
import { Header } from "../../shared/components/Layout/Header";
import { FilterContainer } from "./FilterContainer";
import { ProList } from "./ProList";
const { Content } = Layout;

export const ProsPage = () => {
  return (
    <>
      <Layout style={{ height: "100%" }}>
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
