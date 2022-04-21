import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  margin: 4rem  2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1522px) {
    justify-content: space-evenly;

  }
  .contact_text{
    width: 35rem;
    align-self: center;

  }
  .contact{
    margin: 2rem 0;
    display: flex;
    flex-direction: column ;
    flex-wrap: wrap;
    .icons{
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin: 1rem 0;
      /* @media (min-width: 1522px){
        margin: 1rem  5rem;
      }
      @media (min-width: 1920px){
        margin: 1rem  9rem ;
      } */
    }
    span{
      display: flex;
      align-items: flex-start;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 9.18783px;
      line-height: 11px;
      /* identical to box height */
      color: #1A2025;
      margin: 0 0.5rem  ;
    }
    h4{
      text-align: left;
      font-family: 'Montserrat';
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #1A2025;
      margin: 0 0.5rem  ;
    }
  }
`;
