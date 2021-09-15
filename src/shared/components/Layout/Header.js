import React from "react";
import { PageHeader, Typography } from "antd";
import "antd/dist/antd.css";
const { Title, Text } = Typography;

export const Header = () => {
    const renderTitle = () => {
        return (
            <Title
                strong
                level={2}
                style={{
                    color: "#FFFFFF",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    lineHeight: "2.5rem",
                    fontFamily: "Fontfabric,sans-serif",
                }}
            >
                Plentific
            </Title>
        );
    };

    const renderSubTitle = () => {
        return (
            <Text style={{ color: "gray" }}>
                Welcome the plentific pro&apos;s page by (umitduran)
            </Text>
        );
    };

    return (
        <PageHeader
            style={{
                border: "6px solid rgb(235, 237, 240)",
                background: "#161c2f",
                color: "#FFFFFF",
                margin: "50px",
            }}
            title={renderTitle()}
            subTitle={renderSubTitle()}
        />
    );
};
