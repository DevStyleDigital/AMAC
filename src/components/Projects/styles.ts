import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
  height: 100vh;
  img{
      width:100%;
      height: 100%;
      object-fit:cover ;
      object-position: center ;
      background-repeat: no-repeat;
  }
  .NomePrj{
    grid-row: 1;
    position: relative;

    .sombraImg{
      position:absolute;
      width:100%;
      height: 100%;
      top:0;
      left:0;
      background: linear-gradient(0deg, #E30613 0%, rgba(227, 6, 19, 0) 73.51%);
      mix-blend-mode: multiply;
    }
    .texto_prj{
      position: absolute;
      left: 2rem;
      bottom: 8rem;
    }

    .vejamais{
      position: absolute;
      bottom: 3rem;
      left: 2rem;
      .fundo{
        width: 5.3rem;
        height: 2rem;
        border-radius: 20px;
        background-color: #E3061395;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :hover .veja{
          width: 5.3rem;
        }
        .veja{
          width:3.5rem;
          height: 2rem;
          border-radius: 20px;
          background-color: #1A2025;
          color: #FFF;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;
          transition: all .5s;
          z-index: 1;
          cursor: pointer;
          :hover{
            width: 5.3rem;
          }
          @media (max-width:520px){
            z-index: 0;
          }
        }

      }
    }
  }
  .ImgPrj{
    height: 100%;
    grid-row: 2;
    background-color: #000;
    .banner1{
      height: 33.3%;
      img{
        filter: grayscale(100%);
      }
    }
    .banner2{
      height: 33.3%;
      img{
        filter: grayscale(100%);
      }
    }

    .linha3{
      height: 33.3%;
      display: flex;
        .banner3{
          width: 100%;
          height: 100%;
          img{
            filter: grayscale(100%);
          }
        }
      .banner4{
        width: 100%;
        height: 100%;
          img{
            filter: grayscale(100%);
          }
      }
    }

  }
  @media (min-width: 1024px){
    grid-template-columns: 50% 50%;
    grid-template-rows:100%;
    .NomePrj{
      width: 100%;
      height: 100%;
      grid-column: 1;
    }
    .ImgPrj{
      width: 100%;
      height: 100%;
      grid-row: 1;
      grid-column: 2;
    }
    @media (min-width:1920px){
      max-height: 100vh;
      overflow: hidden;
    }
}
`;
