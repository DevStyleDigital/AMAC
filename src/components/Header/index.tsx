import React, { useEffect, useRef, useState } from 'react';
import Icons from '@components/Icons';
import Hamburges from '@components/Hamburges';
import HamburgerProvider from 'src/context/hamburgesContext';
import { Link } from '@styles/components/link';
import { HeaderStyle } from './styles';

const Header: React.FC = () => {
  const header = useRef<HTMLElement>(null);

  const [currentRouter, setCurrentRouter] = useState('/');

  useEffect(() => {
    const empresa = document.querySelector('#empresa');
    const empresaPosition = empresa.getBoundingClientRect();
    const servico = document.querySelector('#service');
    const servicoPosition = servico.getBoundingClientRect();
    const projeto = document.querySelector('#project');
    const projetoPosition = projeto.getBoundingClientRect();

    window.addEventListener('scroll', () => {
      const top = window.scrollY;
      const maxTop = document.body.scrollHeight - window.innerHeight;
      if (window.scrollY >= (empresaPosition.y - 200)
        && window.scrollY <= (servicoPosition.y - 200)) {
        setCurrentRouter('/#empresa');
      } else if (window.scrollY >= (servicoPosition.y - 200)
        && window.scrollY <= (projetoPosition.y - 100)) {
        setCurrentRouter('/#service');
      } else if (window.scrollY >= projetoPosition.y - 100
        && !(top >= maxTop)) {
        setCurrentRouter('/#project');
      } else if (top >= maxTop) {
        setCurrentRouter('/#contact');
      } else setCurrentRouter('/');
    });
  }, []);

  return (
    <HeaderStyle ref={header}>
      <a href="#header" onClick={() => setCurrentRouter('/')}>
        <img src="/logo.png" alt="Logo Amac" style={{ width: '120px', height: '40px', objectFit: 'cover' }} />
      </a>
      <div className="navInline">
        <ul>
          <li>
            <Link
              href="#empresa"
              activelink={currentRouter === '/#empresa'}
              onClick={() => setCurrentRouter('/#empresa')}
            >
              Empresa
            </Link>
          </li>
          <li>
            <Link
              href="#service"
              activelink={currentRouter === '/#service'}
              onClick={() => setCurrentRouter('/#service')}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="#project"
              activelink={currentRouter === '/#project'}
              onClick={() => setCurrentRouter('/#project')}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              activelink={currentRouter === '/#contact'}
              onClick={() => setCurrentRouter('/#contact')}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className="leftContent">
        <Icons />
        <HamburgerProvider>
          <Hamburges />
        </HamburgerProvider>
      </div>
    </HeaderStyle>
  );
};
export default Header;
