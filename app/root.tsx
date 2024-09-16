import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import { Layout } from "antd";

import AppTheme from "~/components/AppTheme/AppTheme";
import AppHeader from "~/components/AppHeader/AppHeader";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

declare global {
  interface Window {
    ENV: {
      MAPBOX_ACCESS_TOKEN: string;
    };
  }
}

export async function loader() {
  return json({
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

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
          <Layout style={{ minHeight: "100vh" }}>
            <AppHeader />
            <Outlet />
          </Layout>
        </AppTheme>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data)}`,
          }}
        />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
