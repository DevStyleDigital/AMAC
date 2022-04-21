import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '@Globals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
