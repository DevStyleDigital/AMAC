import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { MainStyle } from './styles';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <MainStyle>{children}</MainStyle>
    <Footer />
  </>
);

export default Layout;
