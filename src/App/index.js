import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from '../routes';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import { GlobalStyles } from '../styles/globalStyles';
import { StyledToast } from '../styles/toastStyles';

export function App() {

  return (
    <>
      <GlobalStyles />
      <NavigationBar />
      <StyledToast
            position="top-right"
            autoClose={3500}
            newestOnTop={false}
            rtl={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
      />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )

}

