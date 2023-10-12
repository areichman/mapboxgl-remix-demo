import { styled } from "styled-components";

const Container = styled.div`
  padding: 15px;
`;

interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
