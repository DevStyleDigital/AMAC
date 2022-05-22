import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: white;
    color: black;
    overflow-x: hidden;
  }
  html{
    scroll-behavior: smooth;
  }
  #__next {
    width: 100%;
    height: 100%;
  }
  .Box{
    @media(max-width: 1024px){
      flex-direction: column;
    }
  .selectGallery{
    background-color: transparent;
    outline: none;
    border: none;
    width: 50%;
    height: 100%;
    overflow: hidden;
    @media(max-width: 1024px){
      width: 100%;
      height: 50%;
    }
  }
}
.Box2{
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
}
`;
