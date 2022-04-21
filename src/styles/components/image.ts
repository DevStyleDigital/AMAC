import styled from 'styled-components';

export const Image = styled.img`

  width:100vw;
  height: 20rem;
  object-fit:cover ;
  object-position: center ;
  background-repeat: no-repeat ;
  background-color: #000;
  @media screen and (min-width: 1024px){
    width: 100% ;
    height: calc(100vh - 50px) ;
  }
`;
