// This layer should only fetch event types that will include a geometry.
// https://www.weather.gov/media/documentation/docs/NWS_Geolocation.pdf
//
// The NWS API does not allow us to send a fake cache-buster query param, but
// we can modify the limit variable to refresh the layer.
// https://www.weather.gov/documentation/services-web-api#/default/alerts_active

import type { Map } from "mapbox-gl";
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";

interface Props {
  map: Map;
  event: string;
}

export function AlertsLayer({ map, event }: Props) {
  // TODO: update limit every few minutes
  const [limit] = useState(500);

  useEffect(() => {
    map.addSource("nws-alerts", {
      type: "geojson",
      data: `https://api.weather.gov/alerts/active?event=${event}&limit=${limit}`,
    });

    map.addLayer({
      id: "nws-alerts",
      type: "fill",
      source: "nws-alerts",
      paint: {
        "fill-color": "red",
        "fill-opacity": 0.5,
      },
    });

    map.on("click", "nws-alerts", ({ lngLat, features }) => {
      const { properties } = features![0];
      new mapboxgl.Popup()
        .setLngLat(lngLat)
        .setHTML(
          `
          <strong>${properties!.headline}</strong>
          <p>${properties!.description}</p>
          `
        )
        .addTo(map);
    });

    return () => {
      map.removeLayer("nws-alerts");
      map.removeSource("nws-alerts");
    };
  }, [limit]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
