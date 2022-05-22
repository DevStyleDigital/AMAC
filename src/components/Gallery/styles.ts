import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    transition: all .5s ease;
    filter: grayscale(100%);
    @media (min-width: 1024px){
    :hover{
      transform: scale(1.1);
      filter: grayscale(0%);
    }
    }
    @media (max-width: 1024px){
      filter: grayscale(0%);
    }
    .sombraImg{
      position:absolute;
      width:100%;
      height: 100%;
      top:0;
      left:0;
      mix-blend-mode: multiply;
    }
    .text{
      position: absolute;
      bottom: 3rem;
      width: 100%;
      left: 0rem;
      .title{
        color:#fff;
      }
    }
    img{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
`;
