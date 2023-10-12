import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Layout, Typography } from "antd";

import AppTheme from "~/components/AppTheme/AppTheme";
import AppHeader from "~/components/AppHeader/AppHeader";

const { Header, Content } = Layout;
const { Text } = Typography;

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <AppTheme>
          <Layout>
            <AppHeader />
            <Content style={{ minHeight: "100vh" }}>
              <Outlet />
            </Content>
          </Layout>
        </AppTheme>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
