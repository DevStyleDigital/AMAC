import { TextoCard, TitleCard } from '@styles/components/text';
import React from 'react';
import { Container } from './styles';

interface props {
  imagem: string;
  title: string
}

const Cards: React.FC<props> = ({ children, imagem, title }) => (

  <Container>
    <div className="imgCard">
      <img src={imagem} alt="img" />
    </div>
    <div className="textCard">
      <TitleCard>{title}</TitleCard>
      <TextoCard>
        {children}
      </TextoCard>
    </div>
  </Container>

);

export default Cards;
