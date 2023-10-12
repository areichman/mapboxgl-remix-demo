import { Typography } from "antd";
import PageContainer from "~/components/PageContainer/PageContainer";

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  return (
    <PageContainer>
      <Title>About</Title>
      <Paragraph>
        This app uses the following frameworks:
        <ul>
          <li>Remix</li>
          <li>Ant Design</li>
          <li>Styled Components</li>
          <li>Mapbox GL JS</li>
        </ul>
      </Paragraph>
    </PageContainer>
  );
}
