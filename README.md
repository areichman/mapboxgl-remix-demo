# Map Demo

This is a series of demo apps I created to try out some new frameworks.

## Demos

- [MapboxGL + Remix](./packages/mapboxgl-remix)

## Features

Since I have previous experience building map-based search interfaces, I figured I would build on that and create something more than a simple TODO app. The demo apps all have these basic features:

- A base map, e.g. satellite or roads. Where possible, I would like to use a muted satellite style, as it provides good spatial context but still offers a fairly flat canvas for viewing geospatial data (polygons, markers) on top of it.
- A simple GeoJSON layer to demonstrate loading external geospatial data
- A styled popup window that provides details about the layer feature that was selected
- A layer switcher that allows the user to customize the view, depending on what task they are performing
- A simple About page, to demonstrate how the app router works

## Screenshot

![screenshot](./screenshot.png)
