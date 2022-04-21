import React, {
  useEffect, useRef, useContext, useState,
} from 'react';

import { HamburgerContext } from 'src/context/hamburgesContext';
import { Container, Fade } from './styles';
import {
  BusinessIcon, ServicesIcon, BricksIcon, ContactSupportIcon,
} from '../../styles/components/icons';

interface props {
  toggle: boolean
}

const Navibar: React.FC<props> = ({ toggle }) => {
  const { setHamburger } = useContext(HamburgerContext);
  const NaviRef = useRef<HTMLDivElement>(null);
  const FadeNavi = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    FadeNavi.current?.addEventListener('touchstart', (ev) => {
      setTouchStart(ev.changedTouches[0].clientX);
    });
    FadeNavi.current?.addEventListener('touchmove', (ev) => {
      const { clientX } = ev.changedTouches[0];
      if (clientX > touchStart) {
        setHamburger(false);
      }
    });
  }, []);

  useEffect(() => {
    if (NaviRef.current) {
      if (toggle) {
        NaviRef.current.style.right = '0';
        FadeNavi.current.style.opacity = '1';
        FadeNavi.current.style.visibility = 'visible';
      } else {
        NaviRef.current.style.right = '-500px';
        FadeNavi.current.style.opacity = '0';
        FadeNavi.current.style.visibility = 'hidden';
      }
    }
  }, [toggle]);

  return (
    <>
      <Fade ref={FadeNavi} onClick={() => setHamburger(false)} />
      <Container ref={NaviRef}>
        <ul>
          <li>
            <a href="#empresa">
              <BusinessIcon />
              Empresa
            </a>
          </li>
          <li>
            <a href="#service">
              <ServicesIcon />
              Serviços
            </a>
          </li>
          <li>
            <a href="#project">
              <BricksIcon />
              Projetos
            </a>

          </li>
          <li>
            <a href="#contact">
              <ContactSupportIcon />
              Contato
            </a>

          </li>
        </ul>
      </Container>
    </>
  );
};

export default Navibar;
