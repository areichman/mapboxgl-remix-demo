import { styled } from "styled-components";
import type { Map } from "mapbox-gl";

import { AlertsLayer } from "./AlertsLayer";
import { Divider } from "antd";

const Title = styled.p`
  font-size: 1.2em;
  font-variant: small-caps;
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
`;

interface Props {
  map: Map;
}

export function LayerControl({ map }: Props) {
  return (
    <Container>
      <Title>Layers</Title>
      <p>Flood Warning</p>

      <Divider />

      <Title>Controls</Title>
      <p>Scale</p>

      <AlertsLayer map={map} event="Flood Warning" />
    </Container>
  );
}
