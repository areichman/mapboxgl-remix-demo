import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { Layout } from "antd";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { LayerControl } from "./LayerControl";

const { Content } = Layout;

export default function Map() {
  const params = useParams();
  const navigate = useNavigate();
  const map = useRef<mapboxgl.Map>();
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      accessToken: window.ENV.MAPBOX_ACCESS_TOKEN,
      container: "map",
      // style: "mapbox://styles/mapbox/satellite-streets-v11",
      style: "mapbox://styles/areichman/clrkqdb9e001p01p5bm3qc2yj",
      center: [Number(params.y) || -77.7, Number(params.x) || 43],
      zoom: Number(params.z) || 9,
      bearing: Number(params.b) || 0,
      pitch: Number(params.p) || 0,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on("moveend", () => {
      const zoom = map.current!.getZoom();
      const { lng, lat } = map.current!.getCenter();
      const bearing = map.current!.getBearing();
      const pitch = map.current!.getPitch();

      const path = [
        zoom.toFixed(2),
        lat.toFixed(2),
        lng.toFixed(2),
        Math.round(bearing),
        Math.round(pitch),
      ].join("/");

      navigate(`/map/${path}`, { replace: true });
    });

    map.current.on("style.load", () => {
      setMapReady(true);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Content>
      <div
        id="map"
        style={{ width: "100%", height: "calc(100vh - 64px" }}
      ></div>
      {mapReady && map.current && <LayerControl map={map.current} />}
    </Content>
  );
}
