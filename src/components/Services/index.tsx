import Cards from '@components/Cards/Index';
import { Texto, Title } from '@styles/components/text';
import React from 'react';
import Slider from 'react-slick';
import { ArrowStyle } from '@styles-components/arrow';
import { PlayIcon } from '@styles-components/icons';
import { Container } from './styles';

interface arrowProps {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  prev?: boolean,
  next?: boolean
}

export const SampleArrow: React.FC<arrowProps> = ({
  className, onClick, next, prev,
}) => (
  <ArrowStyle
    aria-hidden
    className={className}
    onClick={onClick}
    prev={prev}
    next={next}

  >
    <PlayIcon />
  </ArrowStyle>
);

const Services: React.FC = () => (
  <Container id="service">
    <div
      className="text_service"
    >
      <Title style={{ color: '#000' }}>SERVIÇOS</Title>
      <Texto style={{ color: '#000' }}>
        <strong style={{ fontStyle: 'italic' }}>AMAC </strong>
        {' '}
        possui no seu histórico os mais diversos tipos de obras,
        sempre buscando soluções tecnológicos para seus clientes e
        investindo constantemente na qualificação da mão de obra e
        seguranças dos colaboradores.
      </Texto>
    </div>
    <div
      className="linha"

    />
    <div
      className="carousel_services"
    >
      <Slider
        className="center"
        infinite
        autoplaySpeed={5000}
        speed={500}
        // autoplay
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={<SampleArrow prev />}
        nextArrow={<SampleArrow next />}
        centerMode
        swipeToSlide
        responsive={[
          {
            breakpoint: 1930,
            settings: {
              slidesToShow: 1,
              centerPadding: '200px',
            },
          },
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 1,
              centerPadding: '160px',
            },
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 1,
              centerPadding: '120px',
            },
          },
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 1,
              centerPadding: '50px',
            },
          },
          {
            breakpoint: 912,
            settings: {
              centerPadding: '250px',
            },
          },
          {
            breakpoint: 912,
            settings: {
              centerPadding: '250px',
            },
          },
          {
            breakpoint: 820,
            settings: {
              centerPadding: '225px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerPadding: '200px',
            },
          },
          {
            breakpoint: 540,
            settings: {
              centerPadding: '125px',
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerPadding: '60px',
            },
          },
          {
            breakpoint: 360,
            settings: {
              centerPadding: '30px',
            },
          },
        ]}
      >
        <div>
          <Cards imagem="/service1.png" title="Fundações">
            As fundações são projetadas e executadas com base na
            análise dos dados da sondagem do solo realizada
            no local de obra pelo nosso time técnico.
          </Cards>
        </div>
        <div>
          <Cards imagem="/service2.jpg" title="Estrutura de cobertura">
            Utilizamos tesouras em concreto armado, isso é proveniente de estudos
            pelo corpo de engenheiros conforme necessidade do projeto
          </Cards>
        </div>
        <div>
          <Cards imagem="/service3.png" title="Pilares Maciços">
            Todos os pilares são maciços e suas dimensões retangulares,
            seção varia conforme o vão e a carga de obra do projeto.
          </Cards>
        </div>
      </Slider>
    </div>
    <div
      className="linha2"
    />
  </Container>
);

export default Services;
