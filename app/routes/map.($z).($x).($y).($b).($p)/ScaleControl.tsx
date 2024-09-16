import type { Map } from "mapbox-gl";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

interface Props {
  map: Map;
}

export function ScaleControl({ map }: Props) {
  useEffect(() => {
    const control = new mapboxgl.ScaleControl();
    map.addControl(control);
    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
}
