import React from 'react';
import { Facebookicon, Instagramicon } from '../../styles/components/icons';
import { Container } from './styles';

const Icons: React.FC = () => (
  <Container>
    <Instagramicon />
    <Facebookicon />
  </Container>
);

export default Icons;
