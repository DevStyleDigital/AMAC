import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  display: grid;
  grid-template-rows: 50% 50%;
  .text_service{
    grid-row: 1;
    display: flex ;
    align-items: flex-start;
    padding: 2rem 3rem;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .carousel_services{
    margin-top: .3rem;
    width: 100vw;
    height: 100%;
    grid-row: 2;
    .slick-slide{
        opacity: 0.5!important;
        transition: opacity .5s;
      }
      .slick-center{
        opacity: 1 !important;
      }
  }

  @media(min-width: 1024px){
    grid-template-rows: 100% 0;
    grid-template-columns: 40% 10% 40% 10%;
    height: 27rem;
    width: 100%;
    .text_service{
      display: flex;
      align-items:center;
      grid-column: 1 /2;
      height: 100%;
      padding: 8rem 3rem;
    }
    .linha{
      grid-column: 2/3;
      background-color: #A5A5A5;
      align-items:center;
      transform: translateY(-2px);
      justify-self: center;
      width: 1.2px;
      height: 100%;
    }
    .linha2{
      grid-column: 4/5;
      background-color: #A5A5A5;
      align-items:center;
      transform: translateY(-2px);
      justify-self: center;
      z-index: -1;
      width: 1.2px;
      height: 100%;
    }
    .carousel_services{
      grid-row: 1;
      grid-column: 3 / 4;
      width: 100%;
      height: 100%;
      .center{
        transform: translateY(25%);
      }
    }

  }

`;
