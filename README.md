# MapboxGL + Remix Demo

This is part of a series of demo apps I created to try out some new frameworks.

https://github.com/stars/areichman/lists/demo-apps

## Frameworks

- Remix
- MapboxGL JS
- Ant Design
- Styled Components

## Features

Since I have previous experience building map-based search interfaces, I figured I would build on that and create something more than a simple TODO app. Features include:

- A base map. I like to use a muted satellite style, as it provides good spatial context but still offers a fairly flat canvas for viewing geospatial data (polygons, markers) on top of it. In this case, I modified the saturation levels for some of the map features using Mapbox Studio.
- A simple GeoJSON layer to demonstrate loading external geospatial data. The sample layer in this app fetches severe weather alerts from the National Weather Service.
- A styled popup window that provides details about the layer feature that was selected
- A layer switcher that allows the user to customize the view, depending on what task they are performing
- A simple About page, to demonstrate how the app router works

## Commands

See the `package.json` file for all commands used to run the app.

A simple GitHub Actions workflow is also provided that runs ESLint and the Remix build command after each push to the repo.

## Screenshot

![screenshot](./screenshot.png)

## Notes

Due to some limitations with the current versions of Remix and React 18, using CSS in JS solutions (e.g. AntD + Styled Components) with the streaming features of Remix does not work well out of the box. These will likely be resolved when React 19 is fully released. For the time being, this app may produce some visual quirks during page navigations. See https://remix.run/docs/en/main/styling/css-in-js.
