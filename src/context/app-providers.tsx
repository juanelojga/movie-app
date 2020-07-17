import React from 'react';
import { CssBaseline } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <React.StrictMode>
      <CssBaseline />
      {children}
    </React.StrictMode>
  );
};

export default AppProviders;
