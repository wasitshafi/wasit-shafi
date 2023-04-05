import React from 'react';
import { Typography } from '@mui/material';

import { Header, Body, Footer } from 'components';

export const Home = () => {
  return (
    <>
      <Typography variant='h6' sx={{  border: '1px solid red' }}>
        <Header />
        <Body />
        <Footer />
      </Typography>
    </>
  );
};
