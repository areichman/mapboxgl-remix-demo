import { ConfigProvider } from "antd";
import { createGlobalStyle } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default function AppTheme({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          // colorPrimary: "#00b96b",
        },
      }}
    >
      <GlobalStyle />
      {children}
    </ConfigProvider>
  );
}
