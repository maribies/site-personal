import { Background } from '../Components/Background';
import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
  flexboxgrid: {
    breakpoints: {
      lg: 75,
      md: 62,
      sm: 48,
      xs: 0
    },
    container: {
      lg: 69.25,
      md: 62,
      sm: 48
    },
    gutterWidth: 1.875
  }
};

const Index = () => (
  <ThemeProvider theme={theme}>
    <>
      <Background />
    </>
  </ThemeProvider>
);

export default Index;
