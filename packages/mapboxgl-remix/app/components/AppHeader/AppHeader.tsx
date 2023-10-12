import { Layout } from "antd";
import { styled } from "styled-components";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const Logo = styled.span`
  font-size: 1.5rem;
  color: white;
`;

export default function AppHeader() {
  return (
    <StyledHeader>
      <Logo>Map Demo</Logo>
    </StyledHeader>
  );
}
