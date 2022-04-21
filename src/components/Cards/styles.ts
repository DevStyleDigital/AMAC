import styled from 'styled-components';

export const Container = styled.div`
  width: 240px;
  height: 250px;
  background-color: #C4C4C4;
  display: grid;
  grid-template-rows:  50% 50%;
  color: #000;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0 , 0, 0, 0.3);
  cursor: pointer;

  .imgCard{
    grid-row: 1;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    img{
      width:100%;
      height: 100%;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      object-fit:cover ;
      object-position: center ;
      background-repeat: no-repeat;
    }
  }

  .textCard{
    grid-row: 2;
    padding: .5rem 1.3rem;
  }
  @media (min-width: 1024px){
    width: 280px;
    height: 290px;
  }

`;
