import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Head from 'next/head';
import { Image } from '@styles-components/image';
import Slider from 'react-slick';
import { DotsStyle } from '@styles/components/dots';
import {
  TextoCarousel, TextoCarousel2, TextoCarousel3, TextoCarouselDescription,
} from '@styles/components/text';
import Empresa from '@components/Empresa';
import Services from '@components/Services';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import { NaviEmpresa, NaviServices } from '@styles/components/nevegation';
import { WhatsappFixed } from '@styles/components/ilustrations';

const Home: NextPage = () => (
  <>
    <Head>
      <title>AMAC</title>
      <meta name="description" content="Creating OnePage Amac" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Layout>
      <Slider
        dots
        infinite
        autoplaySpeed={5000}
        speed={800}
        autoplay
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        appendDots={(dots) => (
          <DotsStyle>{dots}</DotsStyle>
        )}
      >
        <div id="header">
          <Image src="/banner-hero1.jpg" />
          <TextoCarousel>
            INO
            <br />
            VAÇÃO
          </TextoCarousel>
        </div>
        <div>
          <Image src="/banner-hero2.jpg" />
          <TextoCarousel2>
            Tecnologia
            <br />
            de ponta
          </TextoCarousel2>
          <TextoCarouselDescription>
            em todos
            <br />
            os processos
          </TextoCarouselDescription>
        </div>
        <div>
          <Image src="/banner-hero3.jpg" />
          <TextoCarousel3>
            +1 Obra
            <br />
            AMAC
          </TextoCarousel3>
        </div>
      </Slider>
      <WhatsappFixed
        href="https://api.whatsapp.com/send?phone=5515997711048&text=Estava%20no%20site%20e%20gostaria%20de%20mais%20%20informa%C3%A7%C3%B5es%20%E2%80%A6%20"
        target="_blank"
      >
        <img src="/whatsapp-logo-1.png" alt="imgfixed" />
      </WhatsappFixed>
      <NaviEmpresa id="empresa" />
      <Empresa />
      <NaviServices id="service" />
      <Services />
      <NaviServices id="projects" />
      <Projects />
      <NaviServices id="contact" />
      <Contact />
    </Layout>
  </>
);

export default Home;
