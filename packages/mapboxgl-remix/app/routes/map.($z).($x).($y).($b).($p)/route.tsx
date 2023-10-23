import { useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { Layout } from "antd";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const { Content } = Layout;

export default function Map() {
  const params = useParams();
  const navigate = useNavigate();
  // const map = useRef<mapboxgl.Map>();

  useEffect(() => {
    const map = new mapboxgl.Map({
      accessToken: window.ENV.MAPBOX_ACCESS_TOKEN,
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [Number(params.y) || -77.7, Number(params.x) || 43],
      zoom: Number(params.z) || 9,
      bearing: Number(params.b) || 0,
      pitch: Number(params.p) || 0,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("moveend", () => {
      const zoom = map.getZoom();
      const { lng, lat } = map.getCenter();
      const bearing = map.getBearing();
      const pitch = map.getPitch();

      const path = [
        zoom.toFixed(2),
        lat.toFixed(2),
        lng.toFixed(2),
        Math.round(bearing),
        Math.round(pitch),
      ].join("/");

      navigate(`/map/${path}`, { replace: true });
    });
  }, []);

  return <Content id="map"></Content>;
}
