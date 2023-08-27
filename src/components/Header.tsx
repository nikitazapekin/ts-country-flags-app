/*import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from './Container';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { useCleanup } from '../features/controls/use-cleanup';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
*/

/*
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from './Container';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { useCleanup } from '../features/controls/use-cleanup';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

// Wrap the Link component in a styled component
const Title = styled(Link)`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
      
          <Title to="/" onClick={cleanUp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
*/


import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from './Container';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { useCleanup } from '../features/controls/use-cleanup';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

/*const TitleLink = styled(Link)`
  text-decoration: none;
`;
*/
const TitleLink=Link
const Title = styled.h1`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <TitleLink to="/" onClick={cleanUp}>
            <Title>Where is the world?</Title>
          </TitleLink>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
