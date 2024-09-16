import { Link } from "@remix-run/react";
import { Layout, Menu } from "antd";
import { styled } from "styled-components";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const Logo = styled.span`
  margin-right: 15px;
  font-size: 1.5rem;
  color: white;
`;

export default function AppHeader() {
  const items = [
    { key: "map", label: <Link to="/map">Map</Link> },
    { key: "about", label: <Link to="/about">About</Link> },
  ];

  return (
    <StyledHeader>
      <Logo>Map Demo</Logo>
      <Menu theme="dark" mode="horizontal" items={items} selectable={false} />
    </StyledHeader>
  );
}
