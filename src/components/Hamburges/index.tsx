import React, { useContext } from 'react';
import Hamburger from 'hamburger-react';
import Navibar from '@components/Navibar';
import { HamburgerContext } from 'src/context/hamburgesContext';
import { Container } from './styles';

const Hamburges: React.FC = () => {
  const { hamburger, setHamburger } = useContext(HamburgerContext);

  return (
    <>
      <Container>
        <Hamburger
          toggled={hamburger}
          toggle={setHamburger}
          color="#E30613"
        />
      </Container>
      <Navibar toggle={hamburger} />
    </>
  );
};

export default Hamburges;
