import { useEffect } from "react";
import { Layout } from "antd";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const { Content } = Layout;

export default function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      accessToken: window.ENV.MAPBOX_ACCESS_TOKEN,
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [-77.7, 43],
      zoom: 9,
    });
  });

  return <Content id="map"></Content>;
}
