import React from 'react';
import { Plusicon } from '@styles/components/icons';
import { Texto, Title } from '@styles/components/text';
import { Container } from './styles';

const Projects: React.FC = () => (
  <Container id="project">
    <div
      className="NomePrj"
    >
      <div className="sombraImg" />
      <img
        src="/projeto-banner1.jpg"
        alt="img"
      />
      <div className="texto_prj">
        <Title style={{ margin: '0 2rem 0 0' }}>
          OLIMPIO MATIUCI
        </Title>
        <Texto style={{ margin: '1rem 7rem 0 0' }}>
          Descrição do projeto completo e com detalhes
          de acordo com cada tipo de obra.
        </Texto>
      </div>
      <div className="vejamais">
        <div className="fundo">
          <div className="veja">
            Veja
          </div>
          <Plusicon />
        </div>
      </div>
    </div>
    <div
      className="ImgPrj"
    >
      <div className="banner1">
        <img src="/Prj1.png" alt="prj" />
      </div>
      <div className="banner2">
        <img src="/Prj2.png" alt="prj" />
      </div>
      <div className="linha3">
        <div className="banner3">
          <img src="Prj3.png" alt="prj" />
        </div>
        <div className="banner4">
          <img src="Prj4.png" alt="prj" />
        </div>
      </div>
    </div>
  </Container>
);

export default Projects;
