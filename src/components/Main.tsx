import styled from 'styled-components';
import { Container } from './Container';
import { ReactNode } from 'react';
const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;
interface ListProps {
  children: ReactNode,
}
export const Main = ({ children }: ListProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
