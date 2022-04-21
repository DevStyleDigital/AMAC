import styled from 'styled-components';

export const DotsStyle = styled.div`
  transform: translateY(-3rem);

  li{
    width: 10px;
    button{
    ::before{
      color: #FFF;
      opacity: .7;
    }
  }
  &.slick-active{
    button{
      ::before{
        color: #FFF ;
        font-size: .7rem ;
        transition: font-size .5s;
        opacity: 1 ;
      }
    }
  }
  }

`;
