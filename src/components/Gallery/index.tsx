import { Texto, Title } from '@styles/components/text';
import React from 'react';

import { Container } from './styles';

interface Iprops{
  img: string,
  color: string,
  rgba : string,
  name: string
}

const Gallery: React.FC<Iprops> = ({
  img, color, rgba, name,
} : Iprops) => (
  <Container>
    <div
      className="sombraImg"
      style={{ background: `linear-gradient(0deg, ${color} 0%, ${rgba} 73.51%)` }}
    />
    <div className="text">
      <img
        src={img}
        alt="img"
      />
      <div className="title">
        <Title style={{ fontSize: '1.2rem' }}>
          {name}
        </Title>
        <Texto style={{ fontSize: '0.8rem', opacity: '60%' }}>
          Ver imagens
        </Texto>
      </div>
    </div>

  </Container>
);

export default Gallery;
