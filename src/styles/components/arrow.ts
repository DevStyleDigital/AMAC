import styled, { css } from 'styled-components';

interface arrow {
  next?: boolean,
  prev?: boolean
}
export const ArrowStyle = styled.div`
display: none;
@media (min-width: 1024px){
  width: 4rem;
  height: 4rem;
  background-color: #FFF!important;
  border: 1.2px solid #A5A5A5;
  box-shadow: 0 0 0 1rem #FFF;
  border-radius: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s;
  ::before {
    display: none;
  }

  ${(props: arrow) => props.next && css`
  right: -22%;
  :active{
    transform: translateY(-50%) scale(0.7);
  }
  @media (min-width:1900px){
    right: -17%;
  }

  `}
  ${(props: arrow) => props.prev && css`
  transform: translateY(-50%) rotate(180deg);
  left: -22%;
  :active{
    transform: translateY(-50%) rotate(180deg) scale(0.7)
  }
  @media (min-width:1900px){
    left: -17%;
  }

`}
}
`;
