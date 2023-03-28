import React from 'react';
import { Typography } from '@mui/material';

import { Header, Body, Footer } from 'components';

export const Home = () => {
  return (
    <>
      <Typography variant='h6' sx={{ color: 'secondary.light' }}>
        <Header />
        <Body />
        <Footer />
      </Typography>
    </>
  );
};
