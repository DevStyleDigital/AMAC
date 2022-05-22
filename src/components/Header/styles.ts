import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    height: 55px;
    align-items: center;
    background-color: #1A2025;
    position: fixed ;
    width: 100% ;
    z-index: 999999;
    top: 0;
    left: 0 ;
    z-index:1 ;
    transition: all .4s;
    box-shadow: 0 0 10px rgba(0,0,0, 0.7);
    .navInline{
      display: none;
      @media (min-width:1024px){
        display: flex;
        ul{
          list-style: none;
          display: flex;
        }
        li{
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          line-height: 22px;
          font-weight: 400;
          margin: 0 1rem;
        }
      }
    }
 .leftContent{
   display: inherit;
   align-items: center ;
 }
`;
