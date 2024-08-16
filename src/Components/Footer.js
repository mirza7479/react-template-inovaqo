import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export const FooterBar = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};
