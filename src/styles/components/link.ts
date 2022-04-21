import styled, { css } from 'styled-components';

interface activelink {
  activelink: boolean
}

export const Link = styled.a`
  text-decoration: none;
  color: #ffff;
  transition:all .3s;
  :hover{
    color:#E30613
  }
  ${(props: activelink) => props.activelink && css`
  color: #E30613;
  `}
`;
