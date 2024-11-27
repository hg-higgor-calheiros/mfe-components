import React, { useState } from "react";
import { Layout, Col, Menu, Input, MenuProps, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

const headerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  display: "flex",
  justifyContent: "space-between",
  width: 1440,
  alignItems: "center",
  margin: "auto",
  padding: "0 100px",
  boxShadow: "#0001 0px 4px 2px -2px",
  zIndex: 1
};

const items: MenuProps["items"] = ["Home", "Products", "Offers"].map(
  (key) => ({
    key,
    label: key,
  })
);

interface HeaderProps  {
  isSignedIn: boolean
  onSignOut: any
}

const HeaderComponent = ({ isSignedIn, onSignOut }: HeaderProps) => {
  const [current, setCurrent] = useState("Home");
  const navigate = useNavigate();


  const onClick = (e: { key: React.SetStateAction<string> }) => {
    setCurrent(e.key);
    navigate(e.key === 'Home' ? '/' : `/${e.key.toString().toLowerCase()}`)
  }

  const onAuthClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
      navigate('/')
    } else {
      navigate('/auth/signin')
    }
  }


  return (
    <Header className="container" style={headerStyle}>
      <Col flex={2} onClick={() => navigate('/')} style={{ cursor: 'pointer'}}>Logo</Col>
      <Col flex={1} style={{ display: "flex", alignItems: "center" }}>
        <Search placeholder="Search" allowClear />
      </Col>
      <Menu
        style={{ minWidth: 400 }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      ></Menu>
      <Button
        color="primary"
        onClick={onAuthClick}
      >
        {isSignedIn ? 'Logout' : 'Login'}
      </Button>
    </Header>
  );
};

export default HeaderComponent;
