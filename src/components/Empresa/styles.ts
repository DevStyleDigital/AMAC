import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  background-color: #1A2025;
  transform: translateY(-4px);
  display: grid;
  grid-template-rows: 55% 45%;
  grid-template-columns: 50% 50%;


  .text_empresa{
    grid-row: 1;
    grid-column: 1/3;
    display: flex ;
    align-items: flex-start;
    padding: 2rem 3rem;
    flex-wrap: wrap ;
    animation: fade 1s ease-in-out;
    box-shadow: 0 0 10px rgba(0,0,0, 0.5);
    @media (min-width: 1024px){
      grid-column: 1/2;

    }
  }


  .Bloco1{
    height: 100%;
    grid-column: 1 ;
    background-color: #FFF ;
    position: relative;
    z-index: 9;
    animation: fade 1s ease-in-out;
    box-shadow: 0 0 10px rgba(0,0,0, 0.5);
    > img{
      width: 100%;
      height:100% ;
      object-fit: cover ;
      object-position: center ;
      background-repeat: no-repeat ;
    }
    .play{
      position: absolute;
      z-index: 5;
      width: 60px;
      height: 60px;
      right: 0;
      transform: translate(50%, -50%);
      top: 0;
      .buttonPlay{
      width: 60px;
      background-color: #FFF;
      border-radius: 50%;
      height:60px;
      display: flex;
      align-items: center;
      justify-content:center;
      cursor:pointer;
      object-fit: cover ;
      object-position: center ;
      background-repeat: no-repeat ;
      box-shadow: 0 0 5px black;
      transition: all .5s;
      animation: fade 1.5s ease-in-out;
      :hover{
        transform: scale(1.2);
        box-shadow: 0 0 10px black;
    }
      :active{
        transform: scale(1.2);
        box-shadow: 0 0 10px black;
      }
  }
  }
}

  .Bloco2{
    height: 100%;
    grid-column: 2 ;
    background-color: #333C43 ;
    position: relative;
    animation: fade 1s ease-in-out;
    box-shadow: 0 0 10px rgba(0,0,0, 0.7);
    video{
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* filter: grayscale(100%); */
      opacity: 0.5;
    }
    span{
      position: absolute ;
      left: 1rem ;
      top: 2rem;
      z-index: 5 ;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #FFFFFF;
    }
    @media (min-width: 1024px){
      grid-row: 1 / 3;
      span{
        top:50%;
        transform: translateY(25%);
        left: 3rem ;
      }
    }
}

@keyframes fade{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
`;
