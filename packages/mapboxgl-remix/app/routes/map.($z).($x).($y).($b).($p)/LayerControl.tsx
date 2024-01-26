import { Checkbox, Divider, Space } from "antd";
import type { Map } from "mapbox-gl";
import { useState } from "react";
import { styled } from "styled-components";

import { AlertsLayer } from "./AlertsLayer";
import { ScaleControl } from "./ScaleControl";

const Title = styled.p`
  font-size: 1.2em;
  font-variant: small-caps;
  color: #888;
`;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 300px;
  padding: 0 15px 15px 15px;
  background: rgba(0, 21, 41, 0.8); /* AntD header color */
  color: white;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

  & label {
    color: white;
  }
`;

interface Props {
  map: Map;
}

export function LayerControl({ map }: Props) {
  const [layerState, setLayerState] = useState({
    flood: true,
    scale: true,
  });

  const toggleLayer = (name: string) => {
    const newLayerState = {
      ...layerState,
      [name]: !layerState[name as keyof typeof layerState],
    };
    setLayerState(newLayerState);
  };

  return (
    <Container>
      <Title>Layers</Title>
      <Space>
        <Checkbox
          checked={layerState.flood}
          onChange={() => {
            toggleLayer("flood");
          }}
        >
          Flood Warning
        </Checkbox>
      </Space>

      <Divider />

      <Title>Controls</Title>
      <Space>
        <Checkbox
          checked={layerState.scale}
          onChange={() => {
            toggleLayer("scale");
          }}
        >
          Scale
        </Checkbox>
      </Space>

      {layerState.flood && <AlertsLayer map={map} event="Flood Warning" />}
      {layerState.scale && <ScaleControl map={map} />}
    </Container>
  );
}
